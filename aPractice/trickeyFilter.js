const users=[
    {firstName:'akshay',lastName:'saini',age:22},
    {firstName:'nilesh',lastName:'vishwakarma',age:36},
    {firstName:'mukesh',lastName:'verma',age:24},
    {firstName:'ramwa',lastName:'verma',age:24}
]
const b=users.filter((x)=>x.age<30).map((x)=>x.firstName);
console.log(b);