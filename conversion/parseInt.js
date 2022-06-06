function value(a){
    console.log(typeof(a));
    var converted =parseInt(a);  // parseInt convertes it to Integer
    console.log(converted + 5);
    console.log(typeof(converted));

}
value('5');