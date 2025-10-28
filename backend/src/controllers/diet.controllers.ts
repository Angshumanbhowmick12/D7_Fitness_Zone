import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";
import { ApiError, ApiResponse } from "../utils/responses";
import { db } from "../libs/db";
import { DietStatus } from "../generated/prisma";
import { publishDietStatusChanged } from "../services/pubsub.service";


export const createDiet=asyncHandler(async(req:Request,res:Response)=>{
    const {mealType,mealDetails,calories,protein,carbs,fats}=req.body;

    if(!mealType||!mealDetails){
        throw new ApiError(400,"Meal type and details are required","MISSING_FIELDS")
    }

    const diet=await db.diet.create({
        data:{
            mealType,
            mealDetails,
            calories,
            protein,
            carbs,
            fats,
            userId:req.user!.id,
            status:'PENDING'
        }
    })

    new ApiResponse(201,true,"Diet created successfully",diet).send(res)
})

export const getAlldiets=asyncHandler(async(req:Request,res:Response)=>{
    const {userId,status,startDate,endDate,page='1',limit='10'}=req.query;
    const skip=(Number(page)-1)*Number(limit);

    const where:any={};

    //Members can only see their own diets
    if (req.user!.role==='MEMBER') {
        where.userId=req.user!.id
    }else if(userId){
        where.userId=userId
    }

    if(status){
        where.status=status as DietStatus
    }

    if(startDate||endDate){
    where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate as string);
      if (endDate) where.createdAt.lte = new Date(endDate as string);
    }

    const[diets,total]=await Promise.all([
        db.diet.findMany({
            where,
            skip,
            take: Number(limit),
            include:{
                user:{
                    select:{
                        id:true,
                        name:true,
                        email:true,
                    }
                },
                trainer:{
                    select:{
                        id:true,
                        name:true,
                        
                    }
                },
            },
            orderBy:{
                createdAt:"desc"
            }
        }),
        db.diet.count({where})
    ])

    new ApiResponse(200,true,"Diet fetched successfully",{
        diets,
        pagination:{
            total,
            page:Number(page),
            limit:Number(limit),
            pages:Math.ceil(total/Number(limit))
        }
    }).send(res)
})

export const getDietsById=asyncHandler(async(req:Request,res:Response)=>{
    const diet=await db.diet.findUnique({
        where:{id:req.params.id},
        include:{
            user:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                }
            },
            trainer:{
                select:{
                    id:true,
                    name:true,
                }
            }
        }
    })

    if(!diet){
        throw new ApiError(404,"Diet not found","DIET_NOT_FOUND")
    }

    if(req.user!.role==='MEMBER' && diet.userId !== req.user!.id){
        throw new ApiError(403,"Forbidden","FORBIDDEN")
    }

    new ApiResponse(200,true,"Diet fetched successfully",diet).send(res)
})

export const updateDietEntry=asyncHandler(async(req:Request,res:Response)=>{
    const {mealType,mealDetails,calories,protein,carbs,fats}=req.body;

    const existingDiet=await db.diet.findUnique({
        where:{
            id: req.params.id
        },
    
    })

    if(!existingDiet){
        throw new ApiError(404,"Diet not found","DIET_NOT_FOUND")
    }

    //only the owner can update their diet 
    if(existingDiet.userId !== req.user!.id){
        throw new ApiError(403,"Forbidden","FORBIDDEN")
    }

    const diet=await db.diet.update({
        where:{
            id: req.params.id
        },
        data:{
            mealType,
            mealDetails,
            calories,
            protein,
            carbs,
            fats,
        }
    })

    new ApiResponse(200,true,"Diet updated successfully",diet).send(res)
})

export const deitApprover=asyncHandler(async(req:Request,res:Response)=>{
    const {status}=req.body;

    if(!["APPROVED","REJECTED"].includes(status)){
        throw new ApiError(400,"Invalid status","INVALID_STATUS")
    }
    const diet=await db.diet.update({
        where:{
            id: req.params.id
        },
        data:{
            status:status as DietStatus,
            trainerId:req.user!.id,
        },
        include:{
            user:{
                select:{
                    id:true,
                    name:true,
                }
            },
            trainer:{
                select:{
                    id:true,
                    name:true,
                }
            }
        }
    })

    // create notification for user
    await db.notification.create({
        data:{
            userId:diet.userId,
            message:`Your diet plan has been ${status.toLowerCase()}`,
            type: status ==='APPROVED' ? 'DIET_APPROVED' : 'DIET_REJECTED'
        }
    })

    // publish event via Redis pub/sub
    await publishDietStatusChanged({
        dietId:diet.id,
        status:diet.status,
        trainerId:diet.trainerId,
        userId:diet.userId,
        trainerName:diet.trainer?.name,
        userName:diet.user.name,
    })

    new ApiResponse(200,true,"Diet status updated successfully",diet).send(res)
})

export const deleteDiet=asyncHandler(async(req:Request,res:Response)=>{
    const diet=await db.diet.findUnique({
        where:{
            id:req.params.id
        }
    })

    if(!diet){
        throw new ApiError(404,"Diet not found","DIET_NOT_FOUND")
    }

    // only the owner or admin can delete diet
    if(diet.userId !== req.user!.id && req.user!.role !== 'ADMIN'){
        throw new ApiError(403,"Forbidden","FORBIDDEN")
    }

    await db.diet.delete({
        where:{
            id:req.params.id
        }
    })

    new ApiResponse(200,true,"Diet deleted successfully",diet).send(res)

})

export const nutritionSummary=asyncHandler(async(req:Request,res:Response)=>{
     const { startDate, endDate } = req.query;
    const where: any = { userId: req.user!.id };

    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate as string);
      if (endDate) where.createdAt.lte = new Date(endDate as string);
    }

    const diets=await db.diet.findMany({where})

    const summary=diets.reduce(
        (acc,deit)=>({
            totalCalories:acc.totalCalories+(deit.calories||0),
            totalProtein:acc.totalProtein+(deit.protein||0),
            totalCarbs:acc.totalCarbs+(deit.carbs||0),
            totalFats:acc.totalFats+(deit.fats||0),
        }),
        {
            totalCalories:0,
            totalProtein:0,
            totalCarbs:0,
            totalFats:0,
        }
    )

    new ApiResponse(200,true,"Nutrition summary fetched successfully",
        {
            ...summary,
            entriesCount:diets.length,
        }
    ).send(res)
})


