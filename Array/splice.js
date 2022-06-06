const a=[1,2,3,4,5]
a.splice(1,3);    //remove values from a[2] to a[3] 
console.log(a);   // we're giving range to delete elements


const b=[34,45,3,3,2,2,3,45,3434,435,5,4];
b.splice(1,4,'hi');  //start from 1, remove  2 values and put 'hi' instead of these values 
console.log(b);   //we can put more than 1 values instead of 'hi'