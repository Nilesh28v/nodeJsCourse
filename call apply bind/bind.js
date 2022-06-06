
let name={
    fname:'Nilesh',
    lname:'Vishwakarma',
    }

let printFullName=function(homeTown){
    console.log(this.fname+" "+this.lname+" "+homeTown);
}
let printMyName=printFullName.bind(name,'Bhopal');   //by using bind we can invoke method later
printMyName();    //bind give copy of the method which can be called later