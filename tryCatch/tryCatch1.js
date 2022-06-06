//synchronus
try {
    console.log('Start of the Code');
    fo();
    console.log('Ending of Code');  //this line will not print bcz we error above
    
} catch (error) {         //error can be any variable to just store full error
    console.log('Error occured');
     console.log(error);
    
}