const a=[1,4,6,2,1,3,5,6]
let temp;
let len = a.length

for(var i=0; i<len; i++){
    for(var j= i+1; j<len; j++){
        if(a[i] > a[j]){
            temp = a[i]
            a[i] = a[j]
            a[j] = temp
            
        }
    }
}
console.log(a);

