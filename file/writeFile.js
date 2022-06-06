const fs = require('fs');
fs.writeFile('test.txt','this text is from writefile method',function(err){
    if(err) throw err;
    console.log('Written')
})