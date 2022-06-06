const mongoose=require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    // useCreateIndex:true       Mongoose 6 always behaves as if useNewUrlParser , useUnifiedTopology , and useCreateIndex are true , and useFindAndModify is false .
}) 



//i moved bellow code model folder so need

// const User=mongoose.model('User',{
//     name:{
//         type:String,
//         required:true,  //have provide this feelsd
//         trim:true

//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }
 
//     },
//     password:{
//         type:String,
//         required:true,
//         trim:true,
//         minlength:7,
//         validate(value){
//             if(value.toLowerCase()==='password'){
//                 throw new Error("you'r password is having 'password'")

//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be a positive number')
//             }

//         }

//     }

// })





// const me=new  User({
//     name:'   shubham   ',   //all space will trim
//     email:'shubham@gmail.com  ',
//     password:'1234567'
// }) 

// me.save().then(()=>{
//     console.log(me);

// }).catch((error)=>{
//     console.log(error,'Eror');

// })




// const Task=mongoose.model('Task',{
//     description:{
//         type:String,
//         trim:true,
//         required:true

//     },
//     comleted:{
//         type:Boolean,
//         default:false,
//     }
// })
// const task=new Task({
//     description:'     array',
    
// })
// task.save().then(()=>{
//     console.log(task);
 
// })
// .catch((error)=>{
//     console.log(error);

// })
