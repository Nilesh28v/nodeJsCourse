const student={name:'nilesh',age:34};
 //there are two ways to access values
 //const name=student.name;
 //const age =  student.age;
 
 //but we uses object destructuring
 
 const{name,age}=student;
 console.log(name,age);