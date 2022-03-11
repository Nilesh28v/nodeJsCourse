//async returns promise

async function nilesh(){
    console.log('inside nilesh');
    const a = await console.log('await ');  //code will jump out to run remaining code and then come
    console.log('after await')
    return 'Nilesh';
}
console.log('Before calling Nilesh');
let a = nilesh();
console.log('After calling Nilesh');
console.log(a);
console.log('Last line of this js file');
 