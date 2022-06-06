const fs=require('fs')
const book={
    title:'Ego is the enemy',
    author:'Ryan Holiday'
}
// const bookJSON=JSON.stringify(book);
// fs.writeFileSync('json1.json',bookJSON);
// console.log(bookJSON);

// const parsedData=JSON.parse(bookJSON)
// console.log(parse dD ata.title);
 
// const dataBuffer=fs.readFileSync('json1.json');
// const dataJSON=dataBuffer.toString()
// const data=JSON.parse(dataJSON);
// console.log(data.title); 


const data=fs.readFileSync('json1.json');
const stringData=data.toString();
const objData=JSON.parse(stringData);
objData.name='mukesh'; 
objData.age=44;
const userJSON=JSON.stringify(objData)
fs.writeFileSync('json1.json',userJSON);