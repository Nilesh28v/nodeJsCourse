const person={
    Name:'Nilesh',
    Age:24,
    details: function(){
    return `${this.Name} is ${this.Age}`
    }
    }
    console.log(person.details());