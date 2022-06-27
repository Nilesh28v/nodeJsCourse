const express=require('express')
const app = express()
const mongoose= require('mongoose')
const bodyparser=require('body-parser')

app.use(bodyparser.json()); //this middleware will run every time
//import routes

const  postsRoute= require('./routes/post')

app.use('/posts',postsRoute)


mongoose.connect('mongodb://127.0.0.1:27017/learnrest',()=>{
    console.log('connected to DB');
})
app.listen(3000,()=>{
    console.log('running on server 3000');
})
