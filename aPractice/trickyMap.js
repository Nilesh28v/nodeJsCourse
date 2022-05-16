const users=[
    {firstName:'akshay',lastName:'saini',age:22},
    {firstName:'nilesh',lastName:'vishwakarma',age:36},
    {firstName:'mukesh',lastName:'verma',age:24}
]
const b=users.map((x)=>x.firstName+ " "+x.lastName)
console.log(b);