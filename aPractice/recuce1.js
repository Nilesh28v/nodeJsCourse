const a=[1,2,7,4,5];
const b=a.reduce((acc,cur)=>{
    if(cur>acc){
        acc=cur;
    }
    return acc;
},0)
console.log(b);