import Redis from "ioredis";

const redisConfig={
    host:process.env.REDIS_HOST || 'localhost',
    port:parseInt(process.env.REDIS_PORT || '6379'),
    //password:process.env.REDIS_PASSWORD,
    retryStrategy:(time:number)=>{
        const delay=Math.min(time * 50,2000)
        return delay
    },
    
};

//Publisher Client
export const redisPublisher=new Redis(redisConfig);

//Subscriber Client
export const redisSubscriber=new Redis(redisConfig);

//General purpose client
export const redisClient=new Redis(redisConfig);

redisPublisher.on('connect',()=>{
    console.log('Redis publisher connected')
})

redisSubscriber.on('connect',()=>{
    console.log('Redis subscriber connected')
})

redisClient.on('connect',()=>{
    console.log('Redis client connected')
})

redisPublisher.on('error',(error)=>{
    console.log('Redis publisher error',error)
})

redisSubscriber.on('error',(error)=>{
    console.log('Redis subscriber error',error)
})

redisClient.on('error',(error)=>{
    console.log('Redis client error',error)
})

//Graceful shutdown 
process.on('SIGINT',async()=>{
    console.log('Shutting down gracefully')
    await redisPublisher.quit()
    await redisSubscriber.quit()
    await redisClient.quit()
    process.exit(0)
})