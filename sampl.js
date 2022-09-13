const person = {
    fName : 'Ram',
    fName:'sss',
    lName : 'Manohar',
    age : 31,
    gender : 'Male',
    city : 'Hyd',
    isPassed : true,
    fullName : function(street) {
        return `full name is ${this.fName} ${this.lName} from ${street}`
    }
}

console.log(person);
console.log(person.fName);
console.log(person.fullName('AECS Layout'));
person.age = 23;
console.log(person.age);
console.log(person['city']);
delete person.gender;
person.pincode = 560068;
console.log(person);