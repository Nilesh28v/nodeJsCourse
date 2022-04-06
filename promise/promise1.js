const promise= new Promise ((resolve, reject)=>{
    console.log("fething ...data....");
    setTimeout(()=>{

        resolve([1,2,4]);
    },3000);
});
promise.then(result=>{
    console.log(result);
 })