const express=require('express')
const router=express.Router()
const test=require('../model/testing')

router.get('/',(req,res)=>{
    console.log('This is home is crud');
    res.send('Welcome in Home')
})


router.get('/view',(req,res)=>{
    test.find({})
    .then((data)=>{
        res.json(data)
    })
    .catch((e)=>{
        res.json(e)
    })
})
router.post('/send',(req,res)=>{
    const Test =new test ({name:req.body.name,
        fname:req.body.fname})
    Test.save()
    .then((data)=>{
        res.json(data)
    })
    .catch((e)=>{
        res.json(e)
    })


})

router.put('/:update',async(req,res)=>{
        try{const updateO=await test.updateOne({_id:req.params.update},
        {$set:{name:req.body.name}})
        res.json(updateO)
        console.log(updateO);
    
    }
        
        catch(e){
            res.json(e)

        }
        
})

router.delete('/:remove',(req,res)=>{

    test.deleteOne({name:req.params.remove})
    .then((data)=>{
        console.log(data);
    }).catch((e)=>{
        console.log(e);
    })

})


module.exports=router;


db.learnAggreg.aggregate([{$group:{_id:"$favoriteFruit",count:{$sum:1}}}])