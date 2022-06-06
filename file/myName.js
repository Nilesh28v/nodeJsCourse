myName = (name,lname)=>{
    if (lname==undefined){
        lname='';

    }
    return `My name is ${name} ${lname}`;

}

exports.myName= myName;