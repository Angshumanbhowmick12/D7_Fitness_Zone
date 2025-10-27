import { db } from "../libs/db";
import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";
import { ApiResponse, ApiError } from "../utils/responses";
import { publishNewMessage } from "../services/pubsub.service";

export const sendMessage=asyncHandler(async(req:Request,res:Response)=>{
    const {receiverId,content}=req.body;

    if(!receiverId||!content){
        throw new ApiError(400, 'Receiver ID and content are required', 'INVALID_INPUT')
    }

    const receiver= await db.user.findUnique({where:{id:receiverId}})

    if(!receiver){
        throw new ApiError(404, 'Receiver not found', 'USER_NOT_FOUND')
    }

    const message = await db.message.create({
        data:{
            senderId:req.user!.id,
            receiverId,
            content
        },
        include:{
            sender:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                }
            },
            receiver:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                }
            }
        }
    })

    //publish event via Redis pub/sub
    await publishNewMessage(message)

    new ApiResponse(200,true,"Message sent successfully",message).send(res)
})

export const getConversation=asyncHandler(async(req:Request,res:Response)=>{
    
    const messages= await db.message.findMany({
        where:{
            OR:[
                {
                    senderId:req.user!.id,
                },
                {
                    receiverId:req.user!.id,
                }
            ],
        },
        include:{
            sender:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                },
            },
            receiver:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                },
            },
        },
        orderBy:{ createdAt:"desc"},
    });

    //get unique conversation partners
    const conversationMap=new Map();

    messages.forEach(msg=>{
        const partenerId=msg.senderId===req.user!.id ? msg.receiverId : msg.senderId;
        const partner=msg.senderId === req.user!.id ? msg.receiver : msg.sender;

        if(!conversationMap.has(partenerId)){
            conversationMap.set(partenerId,{
                user:partner,
                lastMessage:msg,
                unreadCount:0
            })
        }else{
            const existingConversation=conversationMap.get(partenerId);
            if(existingConversation){
                conversationMap.set(partenerId,{
                    ...existingConversation,
                    lastMessage:msg,
                    unreadCount:existingConversation.unreadCount+1
                })
            }
        }

        if(msg.receiverId === req.user!.id && !msg.read){
            const conv = conversationMap.get(partenerId);
            if(conv){
                conversationMap.set(partenerId,{
                    ...conv,
                    unreadCount:conv.unreadCount+1
                })
            } 
        }
    })

    const conversations=Array.from(conversationMap.values()).sort((a,b)=>{
        return new Date(b.lastMessage.createdAt).getTime() - new Date(a.lastMessage.createdAt).getTime()
    })

    new ApiResponse(200,true,"Conversations fetched successfully",conversations).send(res)
})

export const SepecificUserMessage=asyncHandler(async(req:Request,res:Response)=>{
    const {page='1',limit='50'}=req.query;
    const skip=(Number(page)-1)*Number(limit);


    const where = {
        OR:[
            { senderId: req.user!.id, receiverId: req.params.userId },
            { senderId: req.params.userId, receiverId: req.user!.id },
        ],
    }

    const [messages,total]=await Promise.all([
        db.message.findMany({
            where,
            skip,
            take: Number(limit),
            include:{
                sender:{
                    select:{
                        id:true,
                        name:true,
                        email:true,
                    }
                },
                receiver:{
                    select:{
                        id:true,
                        name:true,
                        email:true,
                    }
                },
            },
            orderBy:{ createdAt:"desc"}
        }),
        db.message.count({where})
    ])

    new ApiResponse(200,true,"Messages fetched successfully",{
        messages,
        pagination:{
            total,
            page:Number(page),
            limit:Number(limit),
            pages:Math.ceil(total/Number(limit))
        }
    }).send(res)
})


export const markAsRead=asyncHandler(async(req:Request,res:Response)=>{
    const message=await db.message.updateMany({
        where:{
            senderId:req.params.userId,
            receiverId:req.user!.id,
            read:false,
        },
        data:{
            read:true,
        }
    })

    new ApiResponse(200,true,"Messages marked as read successfully",message).send(res)
})


export const unreadMessageCount = asyncHandler(async(req:Request,res:Response)=>{
    const count=await db.message.count({
        where:{
            receiverId:req.user!.id,
            read:false,
        }
    })

    new ApiResponse(200,true,"Unread message count fetched successfully",count).send(res)
})

export const deleteMessage = asyncHandler(async(req:Request,res:Response)=>{
    const message=await db.message.findUnique({
        where:{
            id:req.params.id,
        }
    })

    if(!message){
        throw new ApiError(404,"Message not found","MESSAGE_NOT_FOUND")
    }

    //only sender can delete
    if(message.senderId !== req.user!.id){
        throw new ApiError(403,"Forbidden","FORBIDDEN")
    }

    await db.message.delete({
        where:{
            id:req.params.id,
        }
    })

    new ApiResponse(200,true,"Message deleted successfully",message).send(res)
})
