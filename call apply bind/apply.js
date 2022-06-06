//by call method we can borrow function from objects

let name={
    fname:'Nilesh',
    lname:'Vishwakarma',
    
    }

let printFullName=function(homeTown){
    console.log(this.fname+" "+this.lname+" "+homeTown);
}
printFullName.apply(name,['Bhopal']);  //in apply method we just pass the all the parameter in an array
