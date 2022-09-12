const express=require('express')
require('./config')
const product=require('./product')

const app=express()
app.use(express.json())

app.post('/',async(req,res)=>{
    let data = await product(req.body)
    let result= await data.save()
    res.send(result)

})
app.get('/',async(req,res)=>{
    let data= await product.find()
    res.send(data)
})
app.delete('/:id',async(req,res)=>{
    let data= await product.deleteOne({_id:req.params.id})
    res.send(data)
})
app.put("/",async(req,res)=>{
    let data= await product.updateOne({_id:req.body.id},{$set:{name:req.body.name}})
    res.send(data)
})


app.listen(3000,()=>{
    console.log('server started');

})