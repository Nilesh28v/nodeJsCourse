a= ['nilesh','vishwakarma','madhya pradesh', 123,'bhopal'];

for(i=0;i<=a.length;i++){         //i<=a  in this = will create error undefined error after last element got print bcz after = value it will search for next value which is not existing
    if(typeof a[i]=='string') continue;  //it will pass all string value and only print non string '123','undefined'
    console.log(a[i]);
    
}

console.log('\n')

b= ['nilesh','vishwakarma','madhya pradesh', 123,'bhopal'];

for(i=0;i<=b.length;i++){         
    if(typeof b[i] !=='string') break;  
    console.log(b[i]);
    
}



