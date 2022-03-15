const a=15.5;
var b= Math.round(a);
b=b++;
function mahendra(){
if(b<=20){
    c=20-b;
}
return c;
}
var d=(b-a)*10;
switch (d) {
    case 1:
        f=5;        
        break;
    case 2:
        f=4;        
        break;
    case 3:
        f=3;        
        break;
    case 4:
        f=2;        
        break;

    case 5:
        f=1;        
        break;
    case 6:
        f=0;        
        break;

    default:
        f=0
        break;
}
mahendra();
e=c*6 +f;
console.log(`After ${a} overs, ${e} is total remaining boals`)
