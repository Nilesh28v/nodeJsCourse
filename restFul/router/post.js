const { application } = require('express');
const express=require('express');
const router=express.Router();
const Post=require('../model/posts')

router.get("/",async(req,res)=>{
    try{
        const post= await Post.find();
        res.json(post)
    }
    catch(e){
        res.json({message:e})

    }
})

router.post('/',async(req,res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    })
    try{
        const savedPost=await post.save();
        res.json(savedPost);

    } 
    catch(e){
        res.json({message:e})
    }
})
 
router.get('/:postId',async(req,res)=>{
    try{
       const find=await Post.findById(req.params.postId);
       res.json(find);
    }
    catch(e){
        res.json({message:e})
    }
   
})
router.patch('/:id',async(req,res)=>{
    try{
        const update=await Post.updateOne({__id:req.params.id},{
            $set:{title:'hello it is updated'}
        })
        res.json(update)

    }
    catch(e){
        res.json(e)
    }
})



module.exports=router;