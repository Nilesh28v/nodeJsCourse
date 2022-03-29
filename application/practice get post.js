const express = require ('express')
const students = require('./students')
const app = express()
const allstud = require('./students')

app.use(express.json())  //middle ware 
//basically it is needed when i'm using post method,the body is comming to make it object and set in req.body taht why we use middlewares

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})

app.get('/',(req,res)=>{
    res.json({message:'api is working'})
})

app.get('/students',(req,res)=>{
    res.json(students)

})


// app.post('/students',(req,res)=>{
//     console.log(req.body.name);    //if i run req.body it will give all values passed body 
//     //but if want any specific value like i want only name to show then i will write req.body.name
//     console.log(req.body.lname); 
//     res.send('student post request')

// })
app.post('/students',(req,res)=>{

    if(!req.body.email){
        res.status(400);
        return res.json({error : "email is required.."})

    }
    const user={
        id : students.length +1,
        firstName :req.body.firstName,
        lastName : req.body.lastName,
        email :req.body.email
    }
    students.push(user)
    res.json(user)

})


app.put('/students/:id',(req,res)=>{   //put is used to update
    //to read the id we use params
    const id = students.length +1
    const firstName =req.body.firstName
    const lastName = req.body.lastName
    const email =req.body.email

    const index = students.findIndex((student)=>{
        return (student.id == Number.parseInt(id))
    })
    if(index>=0){
        const std = students[index]
        
        std.firstName=firstName;
        std.lastName=lastName;
        std.email=email;
        res.json(std)
    }else{
        res.status(404)
    }

    // const id =req.params.id
    console.log(id);
    res.json(id)

})