import { redisPublisher, redisSubscriber } from "../libs/redis";
import { emitToAllUsers, emitToUser } from "../libs/socket";

export enum PubSubChannel{
    NEW_MESSAGE='new_message',
    NEW_NOTIFICATION='new_notification',
    POST_CREATED='post_created',
    POST_DELETED='post_deleted',
    POST_UPDATED='post_updated',
    COMMENT_ADDED='comment_added',
    REACTION_ADDED='reaction_added',
    DIET_STATUS_CHANGED='diet_status_changed',
    CHALLENGE_UPDATED='challenge_updated',
    MEMBERSHIP_EXPIRED='membership_expired',
    WORKOUT_REMINDER='workout_reminder',
    USER_JOINED_GROUP='user_joined_group',
    ACHIEVEMENT_UNLOCKED='achievement_unlocked',
    
}

export interface PubSubMessage{
    channel:PubSubChannel;
    data:any;
    timeStamp:Date
}

class PubSubService{
    private initialized=false;

    initialize(){
        if(this.initialized){
            return;
        }

        //subscribe to all channels
        Object.values(PubSubChannel).forEach((channel)=>{
            redisPublisher.subscribe(channel,(err, count)=>{
                if(err){
                    console.error(`Failed to subscribe to channel ${channel}:`,err)
                }
                console.log(`Subscribed to channel ${channel}. Total subscriptions: ${count}`)
            })
        })

        //handle incoming messages
        redisSubscriber.on('message',(channel,message)=>{
            try {
                const parsedMessage:PubSubMessage=JSON.parse(message);
                this.handleMessage(channel as PubSubChannel,parsedMessage.data)
            } catch (error) {
                console.error('Failed to handle message:',error)
            }
        })

        this.initialized=true;
        console.log('PubSubService initialized')
    }
    
    //publish a message to a channel
    async publish(channel:PubSubChannel,data:any){
        if(!this.initialized){
            throw new Error('PubSubService is not initialized')
        }
        try {
            const message:PubSubMessage={
                channel,
                data,
                timeStamp:new Date()
            }
            await redisPublisher.publish(channel,JSON.stringify(message))
            console.log(`Published message to channel ${channel}:`,message)
        } catch (error) {
            console.error('Failed to publish message:',error)
        }
    }

    //handle incoming messages and emit via Socket.io
    private handleMessage(channel:PubSubChannel,data:any){
        switch(channel){
            case PubSubChannel.NEW_MESSAGE:
                this.handleNewMessage(data);
                break;
            case PubSubChannel.NEW_NOTIFICATION:
                this.handleNewNotification(data);
                break;
            case PubSubChannel.POST_CREATED:
                this.handlePostCreated(data);
                break;
            case PubSubChannel.POST_DELETED:
                this.handlePostDeleted(data);
                break;
            case PubSubChannel.POST_UPDATED:
                this.handlePostUpdated(data);
                break;
            case PubSubChannel.COMMENT_ADDED:
                this.handleCommentAdded(data);
                break;
            case PubSubChannel.REACTION_ADDED:
                this.handleReactionAdded(data);
                break;
            case PubSubChannel.DIET_STATUS_CHANGED:
                this.handleDietStatusChanged(data);
                break;
            case PubSubChannel.CHALLENGE_UPDATED:
                this.handleChallengeUpdated(data);
                break;
            case PubSubChannel.MEMBERSHIP_EXPIRED:
                this.handleMembershipExpired(data);
                break;
            case PubSubChannel.WORKOUT_REMINDER:
                this.handleWorkoutReminder(data);
                break;
            case PubSubChannel.USER_JOINED_GROUP:
                this.handleUserJoinedGroup(data);
                break;
            case PubSubChannel.ACHIEVEMENT_UNLOCKED:
                this.handleAchievementUnlocked(data);
                break;
            default:
                console.log(`Unknown channel: ${channel}`)
                break;
        }
    }

    private handleNewMessage(data:any){
        //emit to receiver
        emitToUser(data.receiverId,'message:new',data);
        //also update sender
        emitToUser(data.senderId,'message:sent',data);
    }

    private handleNewNotification(data:any){
        emitToUser(data.userId,'notification:new',data);
    }

    private handlePostCreated(data:any){
        //Broadcast to all connected users (feed update)
        emitToAllUsers('post:created',data);
    }
    private handlePostDeleted(data:any){
        //Broadcast to all connected users (feed update)
        emitToAllUsers('post:deleted',{postId:data.postId});
    }
    private handlePostUpdated(data:any){
        //Broadcast to all connected users (feed update)
        emitToAllUsers('post:updated',data);
    }
    private handleCommentAdded(data:any){
        // Notify post owner
        emitToUser(data.postOwnerId,'comment:new',data);
        //update all viewers of the post
        emitToAllUsers('comment:added',data);
    }
    private handleReactionAdded(data:any){
        if(data.targetUserId){
            emitToUser(data.targetUserId,'reaction:new',data);
        }
    }
    private handleDietStatusChanged(data:any){
        emitToUser(data.userId,'diet:status_changed',data);
    }
    private handleChallengeUpdated(data:any){
        // Notify all participants
        if(data.participantIds){
            data.participantIds.forEach((participantId:string)=>{
                emitToUser(participantId,'challenge:updated',data);
            })
        }
    }
    private handleMembershipExpired(data:any){
        emitToUser(data.userId,'membership:expired',data);
    }
    private handleWorkoutReminder(data:any){
        emitToUser(data.userId,'workout:reminder',data);
    }
    private handleUserJoinedGroup(data:any){
        //Notify all group members
        if(data.groupMemberIds){
            data.groupMemberIds.forEach((memberId:string)=>{
                emitToUser(memberId,'group:member_joined',data);
            })
        }
    }
    private handleAchievementUnlocked(data:any){
        emitToUser(data.userId,'achievement:unlocked',data);
    }
}


export const pubSubService=new PubSubService();

// Helper functions for publishing events
export function publishNewMessage(messageData:any){
   return pubSubService.publish(PubSubChannel.NEW_MESSAGE,messageData);
}

export function publishNewNotification(notificationData:any){
    return pubSubService.publish(PubSubChannel.NEW_NOTIFICATION,notificationData);
}

export function publishPostCreated(postData:any){
    return pubSubService.publish(PubSubChannel.POST_CREATED,postData);
}
export function publishPostDeleted(postData:any){
    return pubSubService.publish(PubSubChannel.POST_DELETED,postData);
}

export function publishPostUpdated(postData:any){
    return pubSubService.publish(PubSubChannel.POST_UPDATED,postData);
}

export function publishCommentAdded(commentData:any){
    return pubSubService.publish(PubSubChannel.COMMENT_ADDED,commentData);
}

export function publishReactionAdded(reactionData:any){
    return pubSubService.publish(PubSubChannel.REACTION_ADDED,reactionData);
}

export function publishDietStatusChanged(dietStatusData:any){
    return pubSubService.publish(PubSubChannel.DIET_STATUS_CHANGED,dietStatusData);
}

export function publishChallengeUpdated(challengeData:any){
    return pubSubService.publish(PubSubChannel.CHALLENGE_UPDATED,challengeData);
}

export function publishMembershipExpired(membershipData:any){
    return pubSubService.publish(PubSubChannel.MEMBERSHIP_EXPIRED,membershipData);
}

export function publishWorkoutReminder(workoutData:any){
    return pubSubService.publish(PubSubChannel.WORKOUT_REMINDER,workoutData);
}

export function publishUserJoinedGroup(userData:any){
    return pubSubService.publish(PubSubChannel.USER_JOINED_GROUP,userData);
}

export function publishAchievementUnlocked(achievementData:any){
    return pubSubService.publish(PubSubChannel.ACHIEVEMENT_UNLOCKED,achievementData);
}



