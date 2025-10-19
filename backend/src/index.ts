import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

const app= express();

const port = process.env.PORT;

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true,limit:'16kb'}))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})