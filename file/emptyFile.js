const fs = require ('fs');
fs.open('test.txt','w',function(err,file){
    if(err) throw err;
    console.log(file);
    console.log('saved');
})