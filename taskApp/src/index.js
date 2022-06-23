const express=require('express')
require('./db/mongoose')  //we  ust accessing this file to use mongoose.
const User=require('./models/user')
const Task=require('./models/task')

const app=express()
const port=process.env.PORT || 3000


app.use(express.json())  //by this line it will parse incoming json into object //by this line we can access what we are sending in postmen by using in app.post as req.boy

app.post('/task',(req,res)=>{
    const task=new Task(req.body)
    task.save().then(()=>{
        res.status(200).send(task)

    })
    .catch((e)=>{
        res.status(400).send(e)

    })

})

app.get('/task',(req,res)=>{
    Task.find({}).then((task)=>{
        res.status(200).send(task)
    }).catch((e)=>{
        res.status(500).send(e)

    })
})
app.get('/task/:id',(req,res)=>{
    const _id=req.params.id
    Task.findById(_id).then((task)=>{
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }).catch(()=>{
        res.status(500).send()
    })
})


app.get('/users',(req,res)=>{    //giving all users values
    User.find({}).then((users)=>{
        res.send(users)

    }).catch((e)=>{
        res.status(500).send()

    })

})

app.get('/users/:id',(req,res)=>{
    const  _id=req.params.id

    User.findById(_id).then((user)=>{   //here we are passing _id it is in string but mongoose automaticly convert it to object
        if(!user){
            return res.status(404).send()
        }
        res.send(user) 
    }).catch((e)=>{
        res.status(501).send()

    })

})


app.post('/users',(req,res)=>{
    const user=new User(req.body)

    user.save().then(()=>{
        res.status(201).send(user)
    }) 
    .catch((e)=>{
        res.status(400).send(e)
        // res.send(e)   
    })
})


app.listen(port,()=>{
    console.log('server is up on port ', port);
})