function hello(name){
    var length=0;
    while(name[length]!==undefined){
        length ++;
    }
    return length
}
var b=hello('nilesh')
console.log(b); 