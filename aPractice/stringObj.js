let myname='Vino thapa';
let channelName=myname;  //pass by value myname and channelName both are different

myName='Thapa Technical';  
console.log(channelname);


const obj1={
    id:1,
    name:'vinod'
}

const obj2=obj1;   //object pass the reference   //pass by reference
obj2.name='Thapa technical';  //by changing obj2 it will also show impact on obj1 also
console.log(obj1);