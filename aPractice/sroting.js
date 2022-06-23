const a=[1,4,6,2,1,3,5,6]
const b=[]
let temp;

for(var i=0;i<a.length;i++){
    for(var j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            temp=a[i]
            a[i]=a[j]
            a[j]=temp

        }
    }
    console.log(a);

}
