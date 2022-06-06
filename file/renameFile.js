const fs = require('fs');
fs.rename('expTXXt.js','expTxt.txt',function(err){
    if(err) throw err;
    console.log('file Renamed');
})