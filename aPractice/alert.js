const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    console.log('Helo');
    alert("learning new things")    //dont know, why not working
   
})
app.listen(3000,()=>{
    console.log('server is up and running');
})