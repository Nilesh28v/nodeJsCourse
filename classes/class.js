

//we use classes to define a template

class Person{
    constructor(name,age,city){
        this.name= name;
        this.age=age;
        this.city=city
    }
    getAddress(){
        return `${this.name} is from city ${this.city}`;
    }
}

const personOne= new Person('Ram',24,'Bhopal');
const personTwo= new Person('Nilesh',25,'indore');

console.log(personOne.name);
console.log(personTwo.getAddress());

personOne.pincode= 4564949;
console.log(personOne);

console.log(personTwo); //this instence wont print other instance value

delete personOne.name;
console.log(personOne);
