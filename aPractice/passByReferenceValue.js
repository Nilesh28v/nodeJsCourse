//primitive  number,string, boolean,undefined,null     //pass by value
//non primitive array,obj            //pass by reference


// //pass by value
// let a=5;
// let b=a;
// b=a+5;
// console.log(a);
// console.log(b);



//pass by reference
let obj1={
    name:'nilesh',
    pass:'vish'
}
let obj2=obj1;  //both variable can chnage value which will impact on both objects
obj2.pass='ram'//changing this will also lead to change obj1 also because obj2 is having address of obj1 it is not stored physically 
console.log(obj1);  
console.log(obj2);


//same this will also work on Array also, they are also non premitive(pass by reference)
