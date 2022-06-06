const add=function(a,b,callback){
    setTimeout(() => {
         c=a+b;
        console.log('sum of two variable is ');        
        callback(c) 
    },2000); 
    
}
add(12,22,(sum)=>{
    console.log(sum);
})