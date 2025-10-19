import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { db } from "../libs/db";
import { ApiError, ApiResponse } from "../utils/responses";



// get all users (admin/trainer only)
export const getAllUsers=asyncHandler(async(req:Request,res:Response)=>{
    const {role,search,page='1',limit='10'}=req.query;
    const skip=(Number(page)-1)*Number(limit);

    const where:any={};

    if(role){
        where.role=role
    }

    if(search){
        where.OR=[
            {name:{contains:search as string,mode:'insensitive'}},
            {email:{contains:search as string,mode:'insensitive'}}
        ]
    }

    const [users,totalUsers]=await Promise.all([
        db.user.findMany({
            where,
            skip,
            take:Number(limit),
            select:{
                id:true,
                name:true,
                email:true,
                phone:true,
                role:true,
                createdAt:true,
                profile:true,
            },
            orderBy:{createdAt:'desc'}
        }),
        db.user.count({where})
    ])

    new ApiResponse(200,true,"Users retrieved successfully",{
        users,
        pagination: {
        total:totalUsers,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(totalUsers / Number(limit)),
      },
    }).send(res)
})

export const getCurrentUser=asyncHandler(async(req:Request,res:Response)=>{
    const user= await db.user.findUnique({
        where:{
            id:req.user!.id
        },
        include:{
            profile:true,
            memberships:{
                orderBy:{
                    createdAt:'desc'
                },
                take:1
            }  

        }
    })

    if (!user) {
        throw new ApiError(404,"User not found","USER_NOT_FOUND")
    }

    new ApiResponse(200,true,"User retrieved successfully",user).send(res)
})

export const getUserById=asyncHandler(async(req:Request,res:Response)=>{
    const user = await db.user.findUnique({
        where:{ id:req.params.id},
        include:{
            profile:true,
            memberships:{orderBy:{createdAt:'desc'}},
            bodyMetrics:{orderBy:{date:'desc'},take:10}
        }
    });

    if(!user){
        throw new ApiError(404,"User not found","USER_NOT_FOUND")
    }

    new ApiResponse(200,true,"User retrieved successfully",user).send(res)
})

export const updateProfile=asyncHandler(async(req:Request,res:Response)=>{
    const {height,weight,goalWeight,goalMuscle,phone}=req.body;

    const user=await db.user.update({
        where:{
            id:req.user!.id
        },
        data:{
            phone,
            profile:{
                update:{
                    height,
                    weight,
                    goalWeight,
                    goalMuscle,
                    
                }
            }
        },
        include:{
            profile:true,
        }
    });

    if(!user){
        throw new ApiError(404,"User not found","USER_NOT_FOUND")
    }

    new ApiResponse(200,true,"Profile updated successfully",user).send(res)
})

//get Body metrics
export const BodyMetrics=asyncHandler(async(req:Request,res:Response)=>{
    const {weight,height,date}=req.body;

    const bmi= height ? weight / Math.pow(height/100,2):null;

    const metric=await db.bodyMetric.create({
        data:{
            userId:req.user!.id,
            weight,
            height,
            bmi,
            date:date ? new Date(date) :new Date(),
        },

    })

    new ApiResponse(200,true,"Metric added successfully",metric).send(res)
})

// get user metrics

export const userMetrics= asyncHandler(async(req:Request,res:Response)=>{
    const {startDate,endDate}=req.query;
    const where :any = { userId: req.params.id}

    if(startDate || endDate){
        where.date ={};
        if(startDate) where.date.gte = new Date(startDate as string)
        if(endDate) where.date.lte = new Date(endDate as string)
    }

    const metrics = await db.bodyMetric.findMany({
        where,
        orderBy:{date:'desc'},
        take:10
    })

    new ApiResponse(200,true,"Metrics retrieved successfully",metrics).send(res)
})

export const deleteUser=asyncHandler(async(req:Request,res:Response)=>{
    const user=await db.user.delete({
        where:{
            id:req.params.id
        }
    })

    new ApiResponse(200,true,"User deleted successfully",user).send(res)
})