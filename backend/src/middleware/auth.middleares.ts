import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/responses";
import jwt from "jsonwebtoken";
import { db } from "../libs/db";
import { Role } from "../generated/prisma";
import { isAuthenticated } from "../utils/auth";
interface JwtPayload {
    id: string;
    email?: string;
    name?: string;
    iat?: number;
    exp?: number;
}            
export const authenticate=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const token=req.cookies.fitness_token;

    if(!token){
        throw new ApiError(401,"Unauthorized","UNAUTHORIZED")
    }

    const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET) as JwtPayload;   
    
    const user = await db.user.findUnique({
        where:{
            id:decodedToken.id
        },
        select:{
            id:true,
            email:true,
            role:true,
            refreshToken:true,
        }
    })

    if(!user){
        throw new ApiError(401,"Unauthorized","UNAUTHORIZED")
    }

    req.user=user;
    next();
})

export const authorize= (...roles:Role[])=>asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    if(!isAuthenticated(req)){
        throw new ApiError(401,"Unauthorized","UNAUTHORIZED")
    }

    if(!roles.includes(req.user.role)){
        throw new ApiError(401,"Unauthorized","UNAUTHORIZED")
    }
    next();
})