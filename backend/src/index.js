import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config({path:'./.env'})


const app= express()
const port = process.env.PORT 

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(cookieParser())


app.listen(port,()=>{
    console.log(`Server is running on ${port} `)
})