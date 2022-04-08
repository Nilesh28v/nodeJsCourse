var express= require("express");
const req = require("express/lib/request");
var router = express.Router();

//the path for this is  /products/
router.use('/',(req,res,next)=>{ // we use this next thing for logding purpose and traceing
    console.log("API call received");
    next();
})
router.get('/',(req,res,next)=>{
    res.send("Get request 3435 for users");
    next();
})
router.use('/',(req,res)=>{
    console.log("API call ended");
   // next();     here no next() because we are ending here
})

// path for this is /products/get-products-details
router.get('/name/:id',(req,res)=>{      //dynamic value in url
    res.send("Get request for abc users"+req.params.id);
})

router.get('/location/:country/:city',(req,res)=>{      //multiple dynamic value in url
    res.send("Get request for abc users"+req.params.country+req.params.city);
})

router.get('/search/:key([0-9]{3})',(req,res)=>{     //pattern matching //it will take 0 to 9 and till 3 digit
    res.send('Data captured is '+req.params.key);
});

router.get('/searchChar/:key([a-zA-z]{3})',(req,res)=>{      //it will take 0 to 9 and till 3 digit
    res.send('Data captured is '+req.params.key);
});
 
router.get('*',(req,res)=>{   //this is wild card routing, one of ways to handel error //if user give any wrong url this will run
    //res.send("URL NOT Found") or we can send object
    var resObj = {
        statusCode:404,
        statusMsg:"URL not found"
    }   
    res.send(resObj);
})


router.post('/create-user',(req,res)=>{
    res.send("List of users");
})

module.exports=router;