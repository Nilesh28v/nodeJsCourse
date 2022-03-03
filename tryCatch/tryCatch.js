//we uses tryCatch block so that our program want stop while we get any error

// let a= undefined;
// if(a !=undefined){
//     throw new error('This is not undefined');
// }
// else{
//     console.log('This is undefined');
// }


try {
    console.logj('Inside try block')
    
} catch {
    console.log('In the Catch block')
    console.log(error);  //full error
    console.log(error.name); //name of that error
    console.log(error.message); 

} finally{
    console.log('this will run always')
}