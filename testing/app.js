const express=require('express')
const mongoose = require('mongoose')
const app=express()
const cr=require("./router/crud")
app.use(express.json())
app.use('/crud',cr)


mongoose.connect('mongodb://127.0.0.1:27017/mydb',()=>{
    console.log('data base is connected');
})

app.listen(3000,()=>{
    console.log('Server is running');
})