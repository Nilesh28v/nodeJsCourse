const a=[4,5,3,2,9];
function double(x){
    return x*2;
}
function triple(x){
    return x*3
}
let output = a.map(triple)
console.log(output);
 output=a.map(double);
console.log(output);