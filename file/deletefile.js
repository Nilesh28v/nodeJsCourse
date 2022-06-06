const fs=require('fs');
fs.unlink('sample.txt', function(err){
    console.log('Deleted');
})