var express= require("express");
var router = express.Router();

//the path for this is  /products/
router.get('/',(req,res)=>{
    res.send("Get request 3435 for prodtucts");
})

// path for this is /products/get-products-details
router.get('/get-product-details',(req,res)=>{
    res.send("Get request for 3434 prodtucts");
})
module.exports=router;