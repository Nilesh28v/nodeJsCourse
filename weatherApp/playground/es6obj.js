const name='nilesh';
const userArge=22
const user={
    name,
    age:userArge,
    location:'bhopal',

}
console.log(user); 


//objet destructuring

const product={
    label:'Red notebook',
    price:3,
    stock:201,
    salePrice:undefined,
    rating:4.1
}
// const{label:productLabel,price,stock,rating=5}=product;   //here rating=5 is like default, it prints when no value in object.
// console.log(productLabel,price,stock,rating); 


const transection=(type,{label,stock})=>{
    console.log(type,label,stock);
    
  
}
transection('order',product) 