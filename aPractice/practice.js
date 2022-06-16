const a ='7899002939';
// const g=Array.from(a) //['7','8',....]
var d=[];
var b=a.length;
for(var i=0;i<b;i++){
    var c=a[i]
    var rgxp=new RegExp(c,"g");  
    console.log(rgxp); 
    var value=`${c}}  : ${a.match(rgxp).length}`
    d.push(value)
}
var d=[...new Set(d)]
console.log(d);
