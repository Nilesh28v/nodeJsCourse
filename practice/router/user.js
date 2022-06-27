const express=require('express')
const router=express.Router();
const User= require('../models/postUser')


router.get('/',(req,res)=>{
    User.find({}).then((a)=>{
        res.json(a)
        console.log(a);
    }).catch((e)=>{
        res.json(e)
    })

})

router.post('/insertUser',(req,res)=>{
    const user=new User({
        name:req.body.name,
        lname:req.body.lname
    })
    user.save().then((data)=>{
        res.json(data)
    })
    .catch((e)=>{
        res.json("message:",e)
    })
    
})

router.patch('/:patch',(req,res)=>{
    User.updateOne(
        {__id:req.params.patch},
            {$set:{name:req.body.name}}
    ).then((data)=>{
        res.send(data)
    }).catch((e)=>{
        res.send(e)
    })
})


router.delete('/delete/:id',(req,res)=>{
    User.deleteOne({__id:req.params.id})
    .then((data)=>{
        res.send(data)
    })
    .catch((e)=>{
        res.send(e)
    })
})

module.exports=router