import { Request,Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError, ApiResponse } from "../utils/responses";
import { db } from "../libs/db";
import { ChallengeStatus } from "../generated/prisma";


export const createChallenge=asyncHandler(async(req:Request,res:Response)=>{
    const {title,description,startDate,endDate}=req.body;

    if(!title||!description||!startDate||!endDate){
        throw new ApiError(400, "All fields are required","MISSING_FIELDS")
    }

    const challenge=await db.challenge.create({
        data:{
            title,
            description,
            startDate:new Date(startDate),
            endDate:new Date(endDate),
            status:"ACTIVE"
        }
    })

    new ApiResponse(201,true,"Challenge created successfully",challenge).send(res)

})

export const getallChallenges=asyncHandler(async(req:Request,res:Response)=>{
    const{status,page=1,limit=10}=req.query;
    const skip=(Number(page)-1)*Number(limit);

    const where:any={};

    if (status) {
        where.status=status as ChallengeStatus;
    }

    const [challenges,total]=await Promise.all([
        db.challenge.findMany({
            where,
            skip,
            take: Number(limit),
            include:{
                _count:{
                    select:{
                        participants:true
                    }
                }
            },
            orderBy:{
                createdAt:"desc"
            }
        }),
        db.challenge.count({where})
    ])

    new ApiResponse(201,true,"Challenges fetched successfully",{
        challenges,
        pagination:{
            total,
            page:Number(page),
            limit:Number(limit),
            pages:Math.ceil(total/Number(limit))
        }
    }).send(res)
})

export const getChallengesById=asyncHandler(async(req:Request,res:Response)=>{
   const challenge=await db.challenge.findUnique({
    where:{ id: req.params.id},
    include:{
        participants:{
            include:{
                user:{
                    select:{
                        id:true,
                        name:true,
                        email:true,
                    }
                }

            },
            orderBy:{ progress:'desc'}
        }
    }
   })

   if (!challenge) {
    throw new ApiError(404,"Challenge not found","CHALLENGE_NOT_FOUND")
   }

   new ApiResponse(200,true,"Challenge fetched successfully",challenge).send(res)
})

export const updateChallenge=asyncHandler(async(req:Request,res:Response)=>{
    const {title,description,startDate,endDate,status}=req.body;
    const challenge=await db.challenge.update({
        where:{id:req.params.id},
        data:{
            title,
            description,
            startDate:startDate ? new Date(startDate):undefined,
            endDate:endDate ? new Date(endDate):undefined,
            status : status as ChallengeStatus,
        }
    })

    new ApiResponse(200,true,"Challenge updated successfully",challenge).send(res)
    
})

export const deleteChallenge=asyncHandler(async(req:Request,res:Response)=>{
    const challenge=await db.challenge.delete({
        where:{id:req.params.id}
    })

    new ApiResponse(200,true,"Challenge deleted successfully",challenge).send(res)
})

export const joinChallenge=asyncHandler(async(req:Request,res:Response)=>{
    const existing= await db.challengeParticipation.findFirst({
        where:{
            challengeId: req.params.id,
            userId: req.user!.id,
        }
    })

    if(existing){
        throw new ApiError(400,'Already participating in this challange')
    }

    const participation= await db.challengeParticipation.create({
        data:{
            challengeId:req.params.id,
            userId:req.user!.id,
            progress:0,
        },
        include:{
            challenge:true,
            user:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                }
            }
        }
    })

    new ApiResponse(200,true,"successfully join challenge",participation)

})

export const leaveChallenge=asyncHandler(async(req:Request,res:Response)=>{
    const participation = await db.challengeParticipation.findFirst({
        where:{
            challengeId:req.params.id,
            userId:req.user!.id,
        }
    })

    if(!participation){
        throw new ApiError(404,"Not participating in this challenge","NOT_PRESENT")
    }

    await db.challengeParticipation.delete({
        where:{
            id:participation.id
        }
    })

    new ApiResponse(200,true,"left challenge successfully",{})
})


export const updateChallengeProgress=asyncHandler(async(req:Request,res:Response)=>{
    const {progress}=req.body;

    if(typeof progress !== 'number'|| progress < 0 || progress >100){
        throw new ApiError(400,"Progress must be between 0 to 100","INVALID_PROGRESS")
    }

    const participation = await db.challengeParticipation.findFirst({
        where:{
            challengeId:req.params.id,
            userId:req.user!.id,
        }
    })

    if(!participation){
        throw new ApiError(404,"Not participating in this challenge","NOT_PRESENT")
    }

    const updatedProgress=await db.challengeParticipation.update({
        where:{id:participation.id},
        data:{progress}
    })
    new ApiResponse(200,true,"Challenge progress updated successfully",updatedProgress).send(res)
})


export const userChallenges=asyncHandler(async(req:Request,res:Response)=>{
    const challenges=await db.challengeParticipation.findMany({
        where:{
            userId:req.user!.id,
        },
        include:{
            challenge:true,
            user:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                }
            }
        },
        orderBy:{joinedAt:"desc"}
    })

    new ApiResponse(200,true,"Challenges fetched successfully",challenges).send(res)
})

