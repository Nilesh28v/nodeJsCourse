let a=[1,2,3,4,5];
let b=[23,434,34,43]; 
a=a.concat(b);  //concatination can only perform b/w integer
console.log(a);


let c=['a','b',1];
let d=['cf','df'];     //not able to run
c=c.concat(d);        //now it is running
console.log(c);