import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError, ApiResponse } from "../utils/responses";
import {db} from "../libs/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { isAuthenticated } from "../utils/auth";

// Define JWT payload interface
interface JwtPayload {
    id: string;
    email?: string;
    name?: string;
    iat?: number;
    exp?: number;
}

export const generateAccessAndRefreshToken = async(user: {id: string; email: string; name: string}) :Promise<{accessToken: string, refreshToken: string}> => {
    const accessToken = jwt.sign(
        {
            id: user.id,
            email: user.email,
            name: user.name,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "7d"
        }
    )

    const refreshToken = jwt.sign(
        {
            id: user.id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "30d" }
    )

    await db.user.update({
        where: { id: user.id },
        data: {
            refreshToken: refreshToken,
        }
    })

    return { accessToken, refreshToken }
}

export const register = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new ApiError(400, "please enter all credential", "INVALID_CREDENTIALS")
    }

    const existingUser = await db.user.findUnique({
        where: {
            email: email
        }
    })

    if (existingUser) {
        throw new ApiError(400, "User is already exist", "USER EXISTS")
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
        data: {
            email,
            name,
            password: hashPassword,
            role: "MEMBER",
            profile:{
                create:{}
            }
        },
        select:{
            id: true,
            name:true,
            email:true,
            role:true,
            createdAt:true,
        }
    })

    // Generate tokens for the new user
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(newUser);

    res.cookie("fitness_token",accessToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        sameSite:"none",
        maxAge:7*24*60*60*1000
    });

    new ApiResponse(201,true,`Success! ${newUser.name} is now part of the system`,{
        user:{
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role:newUser.role,
        },
        accessToken,
        refreshToken
    }).send(res)
})

export const login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Please provide email and password", "INVALID_CREDENTIALS")
    }

    const user = await db.user.findUnique({
        where: {
            email: email
        },
        include:{
            profile:true
        }
    })

    if (!user) {
        throw new ApiError(401, "Invalid credentials", "INVALID_CREDENTIALS")
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid credentials", "INVALID_CREDENTIALS")
    }

    // Generate tokens for the logged-in user
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user);

    res.cookie("fitness_token",accessToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        sameSite:process.env.NODE_ENV ==="production" ? "none" :"strict",
        maxAge:7*24*60*60*1000
    });

    new ApiResponse(200,true,"Login successful",{
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        },
        accessToken,
        refreshToken
        
    }).send(res)

   })


export const logout = asyncHandler(async(req:Request,res:Response)=>{

    if (!isAuthenticated(req)) {
        throw new ApiError(401, "Authentication required", "UNAUTHORIZED")
    }

    await db.user.update({
        where:{
            id:req.user.id
        },
        data:{
            refreshToken:null
        }
    })

    res.clearCookie("fitness_token",{
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV === "production"
    })

    new ApiResponse(200,true,"Logout successful").send(res)
})


export const getUserSessions = asyncHandler(async(req:Request,res:Response)=>{

    if (!isAuthenticated(req)) {
        throw new ApiError(401,"Authentication required","UNAUTHORIZED")
    }

    const {id: userId}=req.user;

    const sessions = await db.user.findFirst({
        where: {
            id: userId
        },
        select:{
            id:true,
            name:true,
            email:true,
            role:true,
            refreshToken:true,
            createdAt:true,
            
        }

    })

    new ApiResponse(200,true,"User sessions retrieved successfully",{
        sessions
    }).send(res)
})

export const refreshAccessToken= asyncHandler(async(req:Request,res:Response)=>{
    const inCommingRefreshToken= req.cookies?.refreshToken || req.body.refreshToken;

    if(!inCommingRefreshToken){
        throw new ApiError(401,"Unauthorized request for refresh token","UNAUTHORIZED")
    }

    let decodedToken

    try {
        decodedToken = jwt.verify(inCommingRefreshToken,process.env.REFRESH_TOKEN_SECRET) as JwtPayload
    } catch (error) {
        throw new ApiError(401,"Refresh token expired","EXPIRED_TOKEN")
    }

    const user= await db.user.findUnique({
        where:{
            id: decodedToken.id
        }
    })

    if(!user){
        throw new ApiError(401,"User not found","USER_NOT_FOUND")
    }

    // Generate new tokens for the user
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user);

    res.cookie("fitness_token",accessToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        sameSite:"none",
        maxAge:7*24*60*60*1000
    });

    new ApiResponse(200,true,"Access token refreshed successfully",{
        accessToken,
        refreshToken
    }).send(res)
})
