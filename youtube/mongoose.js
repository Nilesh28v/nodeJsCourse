const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/mydb")
const product=new mongoose.Schema({
    name:String,
    lname:String
});

const saveInDB=async()=>{
   
    const productModel= mongoose.model('jero',product)
    let data=new productModel({
        name:"34343nfnfjfj",
        lname:"dfsfsdf"
    })
    let result=await data.save()
    console.log(result);
}


const updateInDB=async()=>{

    const productModel= mongoose.model('jero',product)
    let data=await productModel.updateOne({lname:"dfsfsdf"},{$set:{lname:"vishwakarma"}})
    console.log(data);
}


const deleteInDB=async()=>{
    const productModel= mongoose.model('jero',product)
    let data= await productModel.deleteOne({lname:"vishwakarma"})
    console.log(data);
    
}
deleteInDB()