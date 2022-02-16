const a="Hey this is Nilesh";
let b=a.slice(1,7); //it can also take negative values
console.log(b);
//slice and substring do almost same thing 

b=a.substring(1,7);//this cant
console.log(b);

b=a.substr(1,7); //it will start from a[1] postion and print 7 values
console.log(b);


console.log(a[2]);//we can also do that