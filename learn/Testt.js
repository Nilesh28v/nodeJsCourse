let data = ['a','b','c'];
let newData = ['d','e','f','b','g','a','h'];
let resData = [...new Set(data.concat(newData))] // result['a','b','c','d','e','f','g','h'];

console.log(resData);

