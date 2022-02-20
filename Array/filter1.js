const a=[5,43,2,4,5];

function odd(x){
    return x % 2;
}
function even(y){
    return y % 2===0;
}
let output=a.filter(odd)
console.log(output);

let out=a.filter(even)
console.log(out);