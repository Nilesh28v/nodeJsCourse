const express= require('express')
const app=express();
const mongoose=require('mongoose')
const userRouter=require('./router/user')
const bodyparser=require('body-parser')

app.use(bodyparser.json())
app.use('/user',userRouter)

mongoose.connect("mongodb://127.0.0.1:27017/practice",()=>{
    console.log('db connected');
})

app.listen(3000,()=>{
    console.log('server started');
})