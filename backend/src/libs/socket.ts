import { Server, Socket } from "socket.io";
import {Server as HttpServer} from 'http';
import {createAdapter} from 'socket.io-redis-adapter';
import { Role } from "../generated/prisma";
import { redisPublisher, redisSubscriber } from "./redis";
import jwt from "jsonwebtoken";
import Redis from "ioredis";

export interface AuthenticatedSocket extends Socket{
    userId:string;
    userEmail?:string;
    userRole?:Role;
}

export let io:Server;

export const emitToUser=(userId:string,event:string,data:any)=>{
    if(io){
        io.to(`user:${userId}`).emit(event,data)
    }
}

export const emitToAllUsers=(event:string,data:any)=>{
    if(io){
        io.emit(event,data)
    }
}

export const emitToRole=(role:Role,event:string,data:any)=>{
    if(io){
        io.to(`role:${role}`).emit(event,data)
    }
}

export const emitToGroup=(groupId:string,event:string,data:any)=>{
    if(io){
        io.to(`group:${groupId}`).emit(event,data)
    }
}

export const initializeSocket=(httpServer:HttpServer)=>{
    io=new Server(httpServer,{
        cors:{
            origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
            credentials:true
        },

        transports:['websocket','polling']
    })

    //Set up Redis adapter for horizontal scaling 
    io.adapter(createAdapter(redisPublisher,redisSubscriber));
    
    //Authentication middleware
    io.use((socket: Socket, next) => {
        const token = socket.handshake.auth.token || socket.handshake.headers.authorization?.replace('Bearer ', "")
        if (!token) {
            return next(new Error('Authentication required'))
        }

        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as {
                userId: string;
                email?: string;
                role?: Role;
            }

            // Type assertion to AuthenticatedSocket after successful authentication
            const authenticatedSocket = socket as AuthenticatedSocket;
            authenticatedSocket.userId = decoded.userId;
            authenticatedSocket.userEmail = decoded.email;
            authenticatedSocket.userRole = decoded.role;
            next();
        } catch (error) {
            next(new Error('Authentication error: Invalid token'));
        }
    })

    //connection handler
    io.on('connection',(socket:Socket)=>{
        const authenticatedSocket = socket as AuthenticatedSocket;
        console.log(`User connected: ${authenticatedSocket.userId}`)

        //join user personal room
        socket.join(`user:${authenticatedSocket.userId}`)

        //set User online
        
        

    })



}




