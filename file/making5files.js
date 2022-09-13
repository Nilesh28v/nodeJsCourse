const fs= require('fs')
const path= require('path');

const dirPath=path.join(__dirname,'files')
console.log(dirPath);
var files=['apple.txt','banana.txt','ram.txt','shyam.txt','orange.txt']
var data='hello jee'
for(var i=0;i<5;i++){
    fs.writeFileSync(dirPath+"/"+files[i],data)
}
fs.readdir(dirPath,(err,item)=>{
    files.forEach((i)=>{
        console.log(i);

    })
})