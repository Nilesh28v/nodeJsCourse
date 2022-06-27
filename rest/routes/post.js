const express = require('express')
const router= express.Router();
const Post=require('../models/post')



router.get('/',(req,res)=>{
    Post.find({}).then((posts)=>{
        res.status(200).send(posts)
    }).catch((e)=>{
        res.status(500).send(e)

    })

})

router.get('/specific',(req,res)=>{   //posts/specific
    res.send('specific post')

})


router.post('/',(req,res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    })
    post.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json("messge :",err)
    })

})

router.get('/:postId',async(req,res)=>{
    try{
        const post=await Post.findById(req.params.postId)
     res.json(post);

    }
    catch(err){
        res.json({message:err})
    }
    
})

router.patch('/:postId',async(req,res)=>{
    try{
       const updatedPost= await Post.updateOne(
            {_id:req.params.postId},
            {$set:{title: req.body.title}})

            res.json(updatedPost)

    }    
    catch(err){
        res.json({message:err})
    }
})



module.exports= router;
