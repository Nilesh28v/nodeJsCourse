//by call method we can borrow function from objects


let name={
    fname:'Nilesh',
    lname:'Vishwakarma',
    }
let printFullName=function(homeTown){
    console.log(this.fname+" "+this.lname+" "+homeTown);
}
printFullName.call(name,'Bhopal');   //usually we use like this bcz in real world we not write function inside the object
// name.printFullName(); we use it when inside object there is function

let name2={
    fname:'mukesh',
    lname:'verma'
}
printFullName.call(name2)   //by putting name2 in call we can change where this keyword from name is pointing to name2 object