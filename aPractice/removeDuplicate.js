// let a=[1,2,3,4,3,5,5,5,3,3,5]
// let b=[]
// console.log(a);
// let len=a.length
// for(let i=0;i<len;i++){
//     if(b.indexOf(a[i])===-1){
//         b.push(a[i])
//     }
// }
// console.log(b); //working


let a=[1,2,3,4,3,5,5,5,3,3,5]
let b=[]
console.log(a);
let len=a.length
for(let i=0;i<len;i++){
    if((b.includes(a[i]))==false){
        b.push(a[i])
    }
}
console.log(b);   //this is also working







// console.log(a);
// for(i=0;i<a.length;i++){
//     var c=a[i]
//     for(j=i;j<a.length;j++){
//         if(c==a[j]){
//             a.splice(i,1)           
//         }
//     }
// }
// console.log(a);  //wrong
    
   
