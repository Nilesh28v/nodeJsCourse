const a=[1,2,3,4];
const b=a.reduce((acc,cur)=>{
    acc=acc+cur;
    return acc;
},0)
console.log(b);