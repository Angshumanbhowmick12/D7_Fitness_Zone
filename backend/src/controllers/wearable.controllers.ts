import { db } from "../libs/db";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError, ApiResponse } from "../utils/responses";
import { Request, Response } from "express";

export const SyncWearableData=asyncHandler(async(req:Request,res:Response)=>{
    const {steps,heartRate,calories,sleepHours,date}=req.body;

    if(!steps||!heartRate||!calories||!sleepHours||!date){
        throw new ApiError(400,"All fields are required","MISSING_FIELDS")
    }

    const wearableData=await db.wearableData.create({
        data:{
            steps,
            heartRate,
            calories,
            sleepHours,
            date : date ? new Date(date) : new Date(),
            userId:req.user!.id
        }
    })

    new ApiResponse(200,true,"Wearable data synced successfully",wearableData).send(res)
})

export const userWearbleData=asyncHandler(async(req:Request,res:Response)=>{
    const{startDate,endDate,page=1,limit=10}=req.query;
    const skip=(Number(page)-1)*Number(limit);

    const where:any={userId : req.user!.id};

    if (startDate || endDate) {
        where.data={};

        if (startDate) {
            where.data.date={gte:new Date(startDate as string)}
        }

        if (endDate) {
            where.data.date={lte:new Date(endDate as string)}
        }
    }

    const [data,total]=await Promise.all([
        db.wearableData.findMany({
            where,
            skip,
            take: Number(limit),
            orderBy:{
                date:"desc"
            },
            include:{
                user:{
                    select:{
                        id:true,
                        name:true,
                        email:true,
                    }
                }
            }
        }),
        db.wearableData.count({where})
    ])

    new ApiResponse(200,true,"Wearable data fetched successfully",{
        data,
        pagination:{
            total,
            page:Number(page),
            limit:Number(limit),
            pages:Math.ceil(total/Number(limit))
        }
    }).send(res)
})

export const wearableDataById=asyncHandler(async(req:Request,res:Response)=>{
    const data=await db.wearableData.findUnique({
        where:{id:req.params.id},
        include:{
            user:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                }
            }
        }
    })

    if (!data) {
        throw new ApiError(404,"Wearable data not found","WEARABLE_DATA_NOT_FOUND")
    }

    new ApiResponse(200,true,"Wearable data fetched successfully",data).send(res)
})

export const updateWearableData=asyncHandler(async(req:Request,res:Response)=>{
    const {steps,heartRate,calories,sleepHours,date}=req.body;

    const existingData=await db.wearableData.findUnique({
        where:{id:req.params.id}
    })

    if (!existingData) {
        throw new ApiError(404,"Wearable data not found","WEARABLE_DATA_NOT_FOUND")
    }

    if (existingData.userId !== req.user!.id) {
        throw new ApiError(401,"Forbidden","FORBIDDEN")
    }

    const data=await db.wearableData.update({
        where:{id:req.params.id},
        data:{
            steps,
            heartRate,
            calories,
            sleepHours,
            
        }

    })
    

    new ApiResponse(200,true,"Wearable data updated successfully",data).send(res)
})

export const deleteWearableData=asyncHandler(async(req:Request,res:Response)=>{
    const data=await db.wearableData.findUnique({
        where:{id:req.params.id}
    })

    if (!data) {
        throw new ApiError(404,"Wearable data not found","WEARABLE_DATA_NOT_FOUND")
    }

    if (data.userId !== req.user!.id && req.user!.role !== 'ADMIN') {
        throw new ApiError(401,"Forbidden","FORBIDDEN")
    }

    await db.wearableData.delete({
        where:{id:req.params.id}
    })

    new ApiResponse(200,true,"Wearable data deleted successfully",data).send(res)
})

export const getStatistics=asyncHandler(async(req:Request,res:Response)=>{
    const {startDate,endDate}=req.query;

    const where:any={ userId: req.user!.id};

    if(startDate||endDate){
       where.date={};
       if (startDate) {
        where.date.gte=new Date(startDate as string)
       }
       if(endDate){
        where.date.lte=new Date(endDate as string)
       }
    }

    const data= await db.wearableData.findMany({
        where,
        select:{
            steps:true,
            heartRate:true,
            calories:true,
            sleepHours:true,
            date:true
        }
    })

    const stats=data.reduce((acc,item)=>({
        totalSteps:acc.totalSteps + (item.steps || 0),
        totalHeartRate:acc.totalHeartRate + (item.heartRate || 0),
        totalCalories:acc.totalCalories + (item.calories || 0),
        totalSleepHours:acc.totalSleepHours + (item.sleepHours || 0),
        count:acc.count +1,
    }),{
        totalSteps:0,
        totalHeartRate:0,
        totalCalories:0,
        totalSleepHours:0,
        count:0,
    })

    new ApiResponse(200,true,"Statistics fetched successfully",{
        totalSteps: stats.totalSteps,
        averageSteps: stats.count > 0 ? Math.round(stats.totalSteps / stats.count) : 0,
        avgHeartRate: stats.count > 0 ? Math.round(stats.totalHeartRate/stats.count).toFixed(1) : 0,
        totalCalories: stats.totalCalories,
        averangeCalories: stats.count > 0 ? Math.round(stats.totalCalories/stats.count).toFixed(1) : 0,
        totalSleepHours: stats.totalSleepHours.toFixed(1),
        averageSleepHours: stats.count > 0 ? Math.round(stats.totalSleepHours/stats.count).toFixed(1) : 0,
        daysTracked: stats.count,
    }).send(res)
})