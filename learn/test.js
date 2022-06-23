// Take an array of numbers, Write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// (Note: You must do this without making a copy of this array)
// Input: [0, 2, 15, 0, 4]
// Output: [2, 15, 4, 0, 0]




// const arr=(a)=>{
//     const b=a.length
//     for(i=0;i<=b;i++){
//         if(a[i]===0){
//            delete a[i];
//             a.push(0);
//         }

//     }
//     console.log(a);
// }
// arr([0,2,15,0,4])


// var a = 12;
// var b = “12";
// Q1: a == b,  Q2: a === b
// Vivek Shah1:14 PM

let updateCustomerName = (customer) => {
   customer.name = "";
}
let main = () => {
   let customer = {id: 1, name: "Particle41"};
   updateCustomerName(customer);
   console.log(customer);
}
main ();

// Vivek Shah1:19 PM
// https://edabit.com/challenge/jJshPejQ5C44TPpSv
// Vivek Shah1:29 PM
// Take an array of numbers, Write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// (Note: You must do this without making a copy of this array)
// Input: [0, 2, 15, 0, 4]
// Output: [2, 15, 4, 0, 0]
// You1:57 PM


// const arr=(a)=>{
//     const b=a.length
//     for(i=0;i<=b;i++){
//         if(a[i]===0){
//            delete a[i];
//             a.push(0);
//         }

//     }
//     console.log(a);
// }
// arr([0,2,15,0,4])









Darshan Bordekar11:58 AM
const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  Console.log(item);
}
You12:00 PM
undefine
Darshan Bordekar12:00 PM
let a = "25"
let b = 25
console.log(a == b);
console.log( 99 + 1 + "10")
You12:01 PM
1. true
2. 10010
Darshan Bordekar12:02 PM
Settimeout(function() {
     Console.log ('First Line');
},0);
Console.log ('Second Line');
Console.log ('Third Line');
You12:02 PM
second line
third line
First line
Darshan Bordekar12:03 PM
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');
console.log(lydia.name);
console.log(sarah.name);
You12:04 PM
referential error
Darshan Bordekar12:04 PM
const user = {
    name: 'Raj',
    location: {
        city: 'NY',
        state: 'NY'
    }
};
add a new property called zipcode under location which has a value of 346229
You12:05 PM
user.location.zipcode=346229
Darshan Bordekar12:05 PM
const c = [1,2,3,4,5];
c = [...c, 6]
console.log(c)
let a = 12;
--a;
printToConsole(a++);
printToConsole(a);
You12:07 PM
1. 12
2.11
Darshan Bordekar12:07 PM
var a = 30;
let b = a + 20;
let a = 25;
console.log(a + b);
You12:08 PM
75
Darshan Bordekar12:08 PM
Look at this series: 12, 11, 13, 12, 14, 13, 15,...
next 3 numbers after 15
You12:09 PM
14,16,15
Pratik Ghadge12:21 PM
==================
let a = 10;              
if (somecondition) {
      let a = 5;
}
Pratik Ghadge12:24 PM
let a;
Pratik Ghadge12:25 PM
console.log(this);
{}'
Pratik Ghadge12:26 PM
=====
const person = {
    name: "Lydia",
    age: 24,

    greet () {
      console.log(this);
      console.log(this.age);
      function innerFunction() {
          console.log(this); 
          console.log(this.age);
      }
      innerFunction();
    }
}
person.greet();
Pratik Ghadge12:30 PM
typeof null;
tyoeof undefined?
typeof [ ];
Pratik Ghadge12:37 PM
======
const { doSomething } = require("./someFile")  
And
const doSomething = require("./somefile")
Pratik Ghadge12:43 PM
NODE_ENV
Pratik Ghadge12:44 PM
streams
readFile
Pratik Ghadge12:47 PM
piping
