var arr=[
    {fname:'nilesh',lname:'vishwakarma',salary:100},
    {fname:'mukesh',lname:'verma',salary:200},
    {fname:'ram',lname:'kumar',salary:300}
    
]


var b=arr.reduce((acc,c)=>{
    console.log('acc value',acc,"c value", c);
     acc=acc+c.salary
     return acc
},0)
console.log(b);