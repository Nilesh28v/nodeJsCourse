const express = require('express');
const { VarBinary } = require('mssql');
const app= express()


//this is our middleware and next is neccessary to run it further routes
app.use((req,res,next)=>{   //this is application level middleware
    console.log(`Log: ${req.url} ${req.method} ${req.ip} ${new Date()}`);
    next()
})
// method-1 of decalring route level midddlware
// app.use('/dash',(req,res,next)=>{   //this is router level middleware
//     console.log(`Route level middlware`);
//     next()
// })
 
app.get('/',(req,res)=>{
    res.send('HOme page')
})

app.get('/dash',auth,(req,res)=>{  //auth is route level middleware

    res.send('dashboard')          //http://localhost:3000/dash?pwd=admin
})

app.post('/user',(req,res)=>{
    res.send('user page') 
 
})

app.listen(3000,()=>{
    console.log('server is running');

})

function auth(req,res,next){
    console.log('route level middlware');

    if(req.query.pwd ==='admin'){
        next();
    }
    else{
        // res.send('you are not authentic user')
        const err= new Error('Authentication failed')
        err.status=403;
        next(err)
    }
   
}
var courses=[
    {
        id:1,
        name:"'html'"
    },
    {
        id:2,
        name:"css"
    },
    {
        id:3,
        name:"'javaScript'"
    },
    {
        id:4,
        name:"'node'"
    }
]
//API for reading the available courses
app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.post('/api1',(req,res)=>{
    const a=req.body.name
    res.send(a)
})


//API for creathe new Course
app.post('/api/courses',(req,res)=>{
    var course={
            id : courses.length +1,
            name : req.body.name
    };
        courses.push(course);
        res.send(course);

})

app.use((req,res,next)=>{
    const err= new Error("404 Page Not Found")
    err.status =404
    next(err)
})
//Error handling middleware  //by this middleware we can handel anytype of error
app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send(err.message)
})
