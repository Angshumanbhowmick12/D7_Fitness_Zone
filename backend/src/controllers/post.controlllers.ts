import { Request,Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { db } from "../libs/db";
import { publishPostCreated, publishPostUpdated } from "../services/pubsub.service";
import { ApiError, ApiResponse } from "../utils/responses";
import { EmojiType } from "../generated/prisma";


export const createPost=asyncHandler(async(req:Request,res:Response)=>{
    const {caption,mediaUrl,mediaPublicId,mediaType}=req.body;

    const post=await db.post.create({
        data:{
            caption,
            mediaUrl,
            mediaPublicId,
            mediaType,
            userId: req.user!.id
        },
        include:{
            user:{
                select:{
                    id:true,
                    name:true,
                    email:true
                }
            }
        }

    })

    //publish event
    await publishPostCreated(post)

    new ApiResponse(201,true,"Post created successfully",post).send(res)
})

export const getAllPost=asyncHandler(async(req:Request,res:Response)=>{
   const {userId,page='1',limit='10'}=req.query;
   const skip=(Number(page)-1)*Number(limit);

   const where:any={};

   if(userId){
       where.userId=userId
   }

   const [posts,totalPosts]=await Promise.all([
       db.post.findMany({
           where,
           skip,
           take:Number(limit),
           orderBy:{createdAt:'desc'},
           include:{
               user:{
                   select:{
                       id:true,
                       name:true,
                       email:true
                   }
               },
               _count:{
                select:{
                    comments:true,
                    reactions:true,
                }
               }
           },
           
       }),
       db.post.count({where})
   ])

   new ApiResponse(200,true,"Posts retrieved successfully",{
    posts,
    pagination:{
        total:totalPosts,
        page:Number(page),
        limit:Number(limit),
        pages:Math.ceil(totalPosts/Number(limit))
    }
   }).send(res)
})

export const postGetById=asyncHandler(async(req:Request,res:Response)=>{
    const post=await db.post.findUnique({
        where:{
            id:req.params.id
        },
        include:{
            user:{
                select:{
                    id:true,
                    name:true,
                    email:true
                }
            },

            comments:{
                include:{
                    user:{
                        select:{
                            id:true,
                            name:true,
                            
                        }
                    },
                    _count:{
                        select:{
                            reactions:true
                        }
                    },

                },
                orderBy:{createdAt:'desc'},

            },
            reactions:{
                include:{
                    user:{
                        select:{
                            id:true,
                            name:true,
                        
                        }
                    }
                }
            },
            _count:{
                select:{
                    comments:true,
                    reactions:true,
                }
            }
        }
    })

    if(!post){
        throw new ApiError(404,"Post not found","POST_NOT_FOUND")
    }

    new ApiResponse(200,true,"Post retrieved successfully",post).send(res)
})


export const updatePost=asyncHandler(async(req:Request,res:Response)=>{
    const {caption,mediaUrl,mediaPublicId,mediaType}=req.body;

    const existingPost=await db.post.findUnique({
        where:{
            id:req.params.id
        }
    })

    if(!existingPost){
        throw new ApiError(404,"Post not found","POST_NOT_FOUND")
    }

    if(existingPost.userId !== req.user!.id){
        throw new ApiError(403,"Unauthorized","UNAUTHORIZED")
    }

    const post=await db.post.update({
        where:{
            id:req.params.id
        },
        data:{
            caption,
            mediaUrl,
            mediaPublicId,
            mediaType,
            userId: req.user!.id
        },
        include:{
            user:{
                select:{
                    id:true,
                    name:true,
                    email:true
                }
            }
        }
    })

    await publishPostUpdated(post)

    new ApiResponse(200,true,"Post updated successfully",post).send(res)
})

export const deletePost=asyncHandler(async(req:Request,res:Response)=>{



    const existingPost=await db.post.findUnique({
        where:{
            id:req.params.id
        }
    })

    if(!existingPost){
        throw new ApiError(404,"Post not found","POST_NOT_FOUND")
    }

    if(existingPost.userId !== req.user!.id && req.user!.role !=='ADMIN'){
        throw new ApiError(403,"Unauthorized","UNAUTHORIZED")
    }
    const post=await db.post.delete({
        where:{
            id:req.params.id
        }
    })

    new ApiResponse(200,true,"Post deleted successfully",post).send(res)
})

export const reactionPost=asyncHandler(async(req:Request,res:Response)=>{
    const{emoji}=req.body;

    if(!emoji || !Object.values(EmojiType).includes(emoji)){
        throw new ApiError(400,"Invalid emoji","INVALID_EMOJI")
    }

    const reaction=await db.postReaction.create({
        data:{
            emoji:emoji as EmojiType,
            userId:req.user!.id,
            postId:req.params.id
        }
    })

    new ApiResponse(200,true,"Reaction added successfully",reaction).send(res)
})

export const deleteReaction=asyncHandler(async(req:Request,res:Response)=>{

    const existingReaction=await db.postReaction.findUnique({
        where:{
            id:req.params.id
        }
    })

    if(!existingReaction || existingReaction.userId !== req.user!.id){
        throw new ApiError(404,"Reaction not found","REACTION_NOT_FOUND")
    }



      
    const reaction=await db.postReaction.delete({
        where:{
            id:req.params.id
        }
    })

    new ApiResponse(200,true,"Reaction deleted successfully",reaction).send(res)
})


