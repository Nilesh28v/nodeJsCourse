console.log(this);  //{}(empty object)

var user ={
    firstName: 'Hitesh',
    courseCount: 4,
    getCourseCount: function(){
        console.log('Line 7',this);  //'this' gives acess to intier object
    }

};
user.getCourseCount();   //not a regular function call

function sayHello(){
    console.log('Hello');
}
sayHello(); // this is how regular function call looks