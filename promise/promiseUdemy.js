const doWorkCallback= new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        reject('thisgs went wrong') //eithe reject or resolve will run , or firstly what is written will run
        // resolve([7]);
        
    }, 2000);
})
doWorkCallback.then((result)=>{
    console.log('success',result);

}).catch((error)=>{
    console.log('error',error);
})