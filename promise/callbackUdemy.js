const doWorkCallback=(callback)=>{
    setTimeout(() => {
        callback(undefined,[7])
        
    }, 1000);

}

doWorkCallback((error,result)=>{
    if(error){
        return console.log(error);
    }
    console.log(result);

})