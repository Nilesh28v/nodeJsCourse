const a='nillin';
const b=()=>{
    const strval=a.toString().split("").reverse().join("");
    const comval=a.toString();
    if(strval===comval){
        console.log(a+' is a Palindrom Value');
    }
    else{
        console.log(a+' is Not a Palindrom');
    }
    }
b()