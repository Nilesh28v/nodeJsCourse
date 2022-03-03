//promise - its an object in JS, it basically has 3 stages, pending, fulfilled, rejected
//we use them as an alternative for callbacks in the places where ealy is involved.

console.log('Initial');
setTimeout(()=> {
    console.log('Inside');

},1000);
console.log('outside');