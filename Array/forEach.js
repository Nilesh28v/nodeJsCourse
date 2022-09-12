let a=[2,3,4,5,6,];
a.forEach(function(b,index){  //we can also print index number by just adding index to function
    a[index]=b*3
    console.log(index + " " + a[index]);
}) 
console.log(a);



//map gives new array
//foreach modifie old array