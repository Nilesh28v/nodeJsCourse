var a=[0,1,2,0,5,32,0,32,0,343,23,2];
var b=[]
for(var i=0;i<a.length;i++){
    if(a[i]==0){
        let b=a[i]
        a.splice(i,1);
        a.unshift(b);
    }
}
console.log(a);

// const a=[0,2,3,0,3,0,343,0,88]
// const b=a.filter((c)=>c==0)
// console.log(b);



