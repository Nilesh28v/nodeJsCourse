const express=require('express')
const app=express()
const PORT=process.env.PORT || 3000

app.get('/',(req,res)=>{
    console.log(req.url);
    console.log(req.method);  //it will tell which method is used GET,POST etc...
    console.log(req.headers);  //it is used to read heraders sent from browser to server
    console.log(req.query.name);  //this gives json when we hit url like localhost/?name=nilesh&age=343
    console.log(req.body);    //when we want data not to be visibal lke password etc..
    res.send('Hello how are you')
})
app.get('/about',(req,res)=>{
    console.log(req. url);
    //res.send('sab aoubt ')//we cannot use res.send more than one time so we use res.write
    res.write('<h1>hello kese ho</h1>')
    res.write('sab change se')
    res.end() //no further message
    res.sendFile(__dirname +'/login.html') //sendfile is used to send the file to client

})

app.get('/student',(req,res)=>{
    res.status(400)
    res.json(
        [
            {rollno:1,name:'Nilesh'},  //we can also send the json data to user
            {rollno:2,name:'mukesh'}
        ]
    )
})

app.listen(PORT,()=>{
   
    console.log('server is ruuning on port',PORT);
})