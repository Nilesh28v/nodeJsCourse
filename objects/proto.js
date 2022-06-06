var User= function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`);
    };
};

var nilesh = new User('Nilesh',4) //nilesh can acess all the properties
nilesh.getCourseCount()
//console.log(nilesh);

var sam = new User('Nisame',5)
sam.getCourseCount()
//console.log(sam);