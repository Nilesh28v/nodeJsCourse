const url=require('url');
const adr='http://localhost:8080/default.html?year=2021month=september';

const q=url.parse(adr,true);

console.log(q.host);  //this returns 'localhost:8080'
console.log(q.path);  //this returns '/default.html?year=2021month=september'
console.log(q.pathname);//returns '/default.html'
console.log(q.search);//returns '?year=2021month=september'

const qdata=q.query; //returns an object: {year:2021,month:september}
console.log(qdata.month); //returns 'month