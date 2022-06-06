require('../src/db/mongoose')
const User= require('../src/models/user')

User.findByIdAndUpdate('6298ebd86b6b441a1433f0ac',{age:3}).then((user)=>{
    console.log(user);
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})