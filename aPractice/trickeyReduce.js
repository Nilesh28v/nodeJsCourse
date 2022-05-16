const users=[
    {firstName:'akshay',lastName:'saini',age:22},
    {firstName:'nilesh',lastName:'vishwakarma',age:36},
    {firstName:'mukesh',lastName:'verma',age:24},
    {firstName:'ramwa',lastName:'verma',age:24}
]

const b=users.reduce((x,y)=>{
    if(x[y.age]){
        x[y.age]=++x[y.age]


    }
    else{
        x[y.age]=1

    }
    return x

},{})
console.log(b);