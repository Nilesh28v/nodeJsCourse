var a='99.99'
var b=parseInt(a)
console.log(b);  //it gives with decimal 99

var a='020% of people'
var b=parseInt(a)
console.log(b);  //it will give 20 //it only take first occurance of int


var a='he was 50'
var b=parseInt(a)  //parseInt only conver if the value is in starting
console.log(b); //NaN