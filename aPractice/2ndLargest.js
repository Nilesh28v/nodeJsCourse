let a=[2,23,4,3,5,45];
const b=a.indexOf(Math.max(...a));
a.splice(b,b)
console.log(Math.max(...a));

