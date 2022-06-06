 require('../src/db/mongoose')
 const Task=require('../src/models/task')

 Task.findByIdAndDelete('6297a5d24f889982d664ae0b').then((task)=>{
     console.log(task);
     return Task.countDocuments({completed:false})

 }).then((result)=>{
     console.log(result);
 }).catch((e)=>{
     console.log(e);

 })