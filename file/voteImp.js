const vote= (Name,age)=>{
    if(age>=18 && age<=60){
console.log(`${Name} is eligible for Vote `);
    }
    else{
        console.log(`${Name} Not Eligible`);
    }
    return '';
}
exports.vote=vote;