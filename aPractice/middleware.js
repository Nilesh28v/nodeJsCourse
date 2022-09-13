
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('please provide age')        
    }
    else if(req.query.age>=18){
        
        next() 
    }
     else{
        res.send('wrong data')
     }


}
module.exports=reqFilter