const fs=require('fs')
const path=require('path')

const dirPath=path.join(__dirname,"crud")
const filePath=`${dirPath}/mango.txt`
// fs.writeFileSync(filePath,'kese ho sab')

// fs.readFile(filePath,"utf8",(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath,'and file is this is ',(e)=>{
//     if(!e){
//         console.log('file updated');
//     }
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(e)=>{
//     if(!e){
//         console.log('file renamed successfully');
//     }
// })

fs.unlinkSync(`${dirPath}/fruit.txt`)
