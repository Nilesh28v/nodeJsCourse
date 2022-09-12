const mongoose=require('mongoose')
const testing=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("test",testing)