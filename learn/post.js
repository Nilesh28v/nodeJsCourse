const express= require('express')
const app= express()
// const bodyParser=require('body-parser')
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())
//this is third party moudle but express also provide in new version

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/login.html");
})


//get is not that safe and we generally to use for login, inseted we use POST
// app.get('/loginr',(req,res)=>{
//     if(req.query.uname == "admin"   && req.query.pwd == "manager"){
//         res.send('login sucessful')
//     }
//     else{
//         res.send('invalid login')
//     }
// })



//for encoding our url we use body parser 
//body parser will convert the our data into json data
app.post('/loginr',(req,res)=>{  //in post method we get data in 'body' method
    console.log(req.body);
    if(req.body.uname == "admin"   && req.body.pwd == "manager"){
                res.send('login sucessful')
            }
            else{
                res.send('invalid login')
            }
})



app.listen(3000,()=>{
    console.log('server is running on 3000 port ');
})