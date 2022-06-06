const a=[1,2,3,4];
function double(a){
    return a*2
}
function triple(d){
    return d*3
}
function binary(f){
    return f.toString(2);
}
const b=a.map(double);
const c=a.map(triple);
const e=a.map(binary);
console.log(b);
console.log(c);
console.log(e);