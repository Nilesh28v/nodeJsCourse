const express=require('express')
const app = express()
const mongoose= require('mongoose')


app.get('/',(req,res)=>{
    res.send('we are on home')

})


mongoose.connect('mongodb://127.0.0.1:27017/learnrest',()=>{
    console.log('connected to DB');
})
app.listen(3000,()=>{
    console.log('running on server 3000');
})
