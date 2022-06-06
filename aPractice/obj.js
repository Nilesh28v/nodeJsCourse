let a={};
let b=a;
let c={};
console.log(a==c);  //all are false bcose two similar objects are not equal always
console.log(a==b);   //but here a and b is having same address
console.log(a==a); // this will be correct