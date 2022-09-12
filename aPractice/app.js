const express= require('express')
const app=express()
const reqFilter=require('./middleware')
const route=express.Router()


// app.use(reqFilter)
route.use(reqFilter)


app.get('/',(req,res)=>{
    res.send('welcome to home page')

})
route.get('/users',(req,res)=>{
    res.send('welcome to users page')

})
route.get('/contact',(req,res)=>{
    res.send('welcome to contact page')

})
app.use('/',route)

app.listen(3000,()=>{
    console.log('server started');

})

