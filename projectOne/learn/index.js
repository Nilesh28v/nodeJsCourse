var express= require("express");   
var app= express();
var products= require('./routes/products');
var users= require('./routes/users');


app.use("/products",products) ;
app.use("/users",users) ;

 
app.listen(3000);   //internally it is calling Node ->http.createserver and listining at 3000 port
