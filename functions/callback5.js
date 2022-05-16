function sub(a,b,c,callB){
    const d=a-b-c;
    console.log('substraction of this values',d);
    callB();
}

sub(6,1,2,()=>{
    console.log(580);
})