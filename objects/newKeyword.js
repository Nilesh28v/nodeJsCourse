//this is the one of the other way of defining objects
//recommended way to defined 'object'
//without 'new' keyword 'this' is pointing to window object
//but now it is pointing inside of the object 'User' 

var User= function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`);
    };
};

var nilesh = new User('Nilesh',4)  //this is not a regular function because we have used 'new' keyword
//to use this type of functional object we need to use 'new' keyword
console.log(nilesh);

var sam = new User('Nisame',4)  //new keyword invokes the constructer and creating a new copy everytime
console.log(sam);