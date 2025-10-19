import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";
import { ApiError, ApiResponse } from "../utils/responses";
import { db } from "../libs/db";
import { MembershipStatus, MembershipType } from "../generated/prisma";

export const createMemberShip=asyncHandler(async(req:Request,res:Response)=>{
    const {userId,membershipType,startDate}=req.body;

    if(!userId || !membershipType || !startDate){
        throw new ApiError(400,"Please provide all credentials","INVALID_CREDENTIALS")
    }

    const start=new Date(startDate);
    const endDate=new Date(start);

    switch(membershipType){
        case 'MONTHLY':
            endDate.setMonth(endDate.getMonth() +1);
            break;
        case 'SIX_MONTHS':
            endDate.setMonth(endDate.getMonth() +6);
            break;
        case 'YEARLY':
            endDate.setFullYear(endDate.getFullYear() +1);
            break;
        default:
            throw new ApiError(400,"Invalid membership type","INVALID_CREDENTIALS")
    }

    const newMembership=await db.membership.create({
        data:{
            userId,
            membershipType: membershipType as MembershipType,
            startDate:start,
            endDate,
            status:'ACTIVE'
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
    })

    new ApiResponse(201,true,"Membership created successfully",newMembership).send(res)
})

export const getAllMemberships=asyncHandler(async(req:Request,res:Response)=>{
    
    const {status,userId,page='1',limit='10'}=req.query;
    const skip=(Number(page)-1)*Number(limit);

    const where:any={};

    if(status){
        where.status=status 
    }

    if(userId){
        where.userId=userId 
    }

    const [memberships,totalMemberships]=await Promise.all([
        db.membership.findMany({
            where,
            skip,
            take:Number(limit),
            include:{
                user:{
                    select:{
                        id:true,
                        name:true,
                        email:true,
                    }
                }
            },
            orderBy:{createdAt:'desc'}
        }),
        db.membership.count({where})
    ])

    new ApiResponse(200,true,"Memberships retrieved successfully",{
        memberships,
        pagination:{
            total:totalMemberships,
            page:Number(page),
            limit:Number(limit),
            pages:Math.ceil(totalMemberships/Number(limit))
        }
    }).send(res)
})

export const usersMemberShips=asyncHandler(async(req:Request,res:Response)=>{
    
    const memberships=await db.membership.findMany({
        where:{
            userId:req.user!.id
        },
        orderBy:{
            createdAt : 'desc'
        }
    })

    new ApiResponse(200,true,"Memberships retrieved successfully",memberships).send(res)
})

export const getMemberShipsById= asyncHandler(async(req:Request,res:Response)=>{
    const membership=await db.membership.findUnique({
        where:{
            id:req.params.id
        },
        include:{
            user:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                    phone:true,
                }
            }
        }
    })

    if(!membership){
        throw new ApiError(404,"Membership not found","MEMBERSHIP_NOT_FOUND")
    }

    new ApiResponse(200,true,"Membership retrieved successfully",membership).send(res)
})


export const updateMemberShip=asyncHandler(async(req:Request,res:Response)=>{
    const {status}=req.body;

    const membership=await db.membership.update({
        where:{
            id:req.params.id
        },
        data:{
            status:  status as MembershipStatus
        }
    })

    new ApiResponse(200,true,"Membership updated successfully",membership).send(res)
})

export const deleteMemberShip=asyncHandler(async(req:Request,res:Response)=>{
    const membership=await db.membership.delete({
        where:{
            id:req.params.id
        }
    })

    new ApiResponse(200,true,"Membership deleted successfully",membership).send(res)
})

// Admin function to get membership statistics
export const getMembershipStats=asyncHandler(async(req:Request,res:Response)=>{
    // Get total members with memberships
    const totalMembersWithMemberships=await db.membership.count({
        where:{
            status:'ACTIVE'
        }
    })

    // Get membership type distribution
    const membershipTypeStats=await db.membership.groupBy({
        by:['membershipType'],
        where:{
            status:'ACTIVE'
        },
        _count:{
            membershipType:true
        }
    })

    // Get membership status distribution
    const membershipStatusStats=await db.membership.groupBy({
        by:['status'],
        _count:{
            status:true
        }
    })

    // Get recently expired memberships (last 30 days)
    const thirtyDaysAgo=new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate()-30)

    const recentlyExpired=await db.membership.count({
        where:{
            status:'EXPIRED',
            endDate:{
                gte:thirtyDaysAgo
            }
        }
    })

    // Get memberships expiring soon (next 7 days)
    const sevenDaysFromNow=new Date()
    sevenDaysFromNow.setDate(sevenDaysFromNow.getDate()+7)

    const expiringSoon=await db.membership.count({
        where:{
            status:'ACTIVE',
            endDate:{
                lte:sevenDaysFromNow,
                gte:new Date()
            }
        }
    })

    const stats={
        totalMembersWithMemberships,
        membershipTypeDistribution:membershipTypeStats.reduce((acc,stat)=>{
            acc[stat.membershipType]=stat._count.membershipType
            return acc
        },{} as Record<string,number>),
        membershipStatusDistribution:membershipStatusStats.reduce((acc,stat)=>{
            acc[stat.status]=stat._count.status
            return acc
        },{} as Record<string,number>),
        recentlyExpired,
        expiringSoon
    }

    new ApiResponse(200,true,"Membership statistics retrieved successfully",stats).send(res)
})

// Admin function to get members with specific membership types
export const getMembersByMembershipType=asyncHandler(async(req:Request,res:Response)=>{
    const {membershipType}=req.params
    const {page='1',limit='10'}=req.query

    const skip=(Number(page)-1)*Number(limit)

    if(!membershipType || !['BASIC','PREMIUM','VIP'].includes(membershipType)){
        throw new ApiError(400,"Invalid membership type","INVALID_MEMBERSHIP_TYPE")
    }

    const [memberships,total]=await Promise.all([
        db.membership.findMany({
            where:{
                membershipType:membershipType as MembershipType,
                status:'ACTIVE'
            },
            skip,
            take:Number(limit),
            include:{
                user:{
                    select:{
                        id:true,
                        name:true,
                        email:true,
                        phone:true
                    }
                }
            },
            orderBy:{
                createdAt:'desc'
            }
        }),
        db.membership.count({
            where:{
                membershipType:membershipType as MembershipType,
                status:'ACTIVE'
            }
        })
    ])

    new ApiResponse(200,true,`${membershipType} memberships retrieved successfully`,{
        memberships,
        pagination:{
            total,
            page:Number(page),
            limit:Number(limit),
            pages:Math.ceil(total/Number(limit))
        }
    }).send(res)
})

// Enhanced function to update membership status with additional logic
export const updateMembershipStatus=asyncHandler(async(req:Request,res:Response)=>{
    const {status, reason}=req.body
    const {id}=req.params

    if(!status){
        throw new ApiError(400,"Status is required","STATUS_REQUIRED")
    }

    if(!['ACTIVE','EXPIRED','SUSPENDED'].includes(status)){
        throw new ApiError(400,"Invalid status","INVALID_STATUS")
    }

    // Get current membership to check business rules
    const currentMembership=await db.membership.findUnique({
        where:{id}
    })

    if(!currentMembership){
        throw new ApiError(404,"Membership not found","MEMBERSHIP_NOT_FOUND")
    }

    // Business logic for status updates
    if(status==='EXPIRED' && currentMembership.status==='ACTIVE'){
        // Check if membership has actually expired
        if(new Date()>currentMembership.endDate){
            // Valid expiration
        }else{
            throw new ApiError(400,"Membership has not expired yet","PREMATURE_EXPIRATION")
        }
    }

    if(status==='SUSPENDED' && currentMembership.status==='ACTIVE'){
        // Additional validation for suspension could be added here
        // e.g., check if user has outstanding payments, violations, etc.
    }

    const updateData:any={
        status:status as MembershipStatus
    }

    // Add reason if provided (you might want to add a reason field to the schema)
    if(reason){
        updateData.notes=reason // Assuming you add a notes field to the schema
    }

    const membership=await db.membership.update({
        where:{
            id
        },
        data:updateData,
        include:{
            user:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                    phone:true
                }
            }
        }
    })

    new ApiResponse(200,true,`Membership status updated to ${status} successfully`,membership).send(res)
})

// Function to get memberships expiring soon (for admin dashboard)
export const getExpiringMemberships=asyncHandler(async(req:Request,res:Response)=>{
    const {days=7}=req.query
    const futureDate=new Date()
    futureDate.setDate(futureDate.getDate()+Number(days))

    const expiringMemberships=await db.membership.findMany({
        where:{
            status:'ACTIVE',
            endDate:{
                lte:futureDate,
                gte:new Date()
            }
        },
        include:{
            user:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                    phone:true
                }
            }
        },
        orderBy:{
            endDate:'asc'
        }
    })

    new ApiResponse(200,true,`Memberships expiring in ${days} days retrieved successfully`,expiringMemberships).send(res)
})
