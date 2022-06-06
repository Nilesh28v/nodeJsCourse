const impData = require('./exp');
const impConcat = require('./exp2');
const calObj = require('./expObj');

// Destructuring the object
const {add} = require('./expObj');

console.log(impData.add(2,3));
console.log(impData.sub(21,3));
console.log(impData.mul(21,3));
console.log(impConcat.concat('Hello ', 'boy'));
console.log(calObj.add(2,3));

console.log(add(34,45));
console.log(sub(34,45));