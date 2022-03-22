a= ['nilesh','vishwakarma','madhya pradesh', 123,'bhopal'];

for(const n of a){       //forof use max for array lookthrough
    console.log(n);
}


const symbols={
    yt:'Youtube',
    ig:'Instagram',
    fb:'Facebook'
}

for(const n in symbols){   //in used for objects 
    console.log(n);  //keys
    console.log(symbols[n]); //values
    console.log(`Key is: ${n} and value is : ${symbols[n]}`);
}