const express=require('express')
const connect=require('./mongodb')

const app=express();
app.use(express.json())

app.get("/",async(req,res)=>{
    let data=await connect.connFun();
    let collection=await data.collection('hello')
    let result= await collection.find().toArray()
    res.send(result)

})

app.post("/",async(req,res)=>{
    let data=await connect.connFun();
    let collection=await data.collection('hello')
    let result= await collection.insertOne(req.body)
    res.send(result)
})
app.put("/",async(req,res)=>{
    let data=await connect.connFun();
    let collection=await data.collection('hello')
    let result= await collection.updateOne({brand:req.body.past},{$set:{brand:req.body.new}})
    res.send(result)
})

app.listen(3000,()=>{
    console.log('server started');
})

