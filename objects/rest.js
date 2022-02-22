const funcOne=(...args)=>{
    console.log(args);
    return args.sort((a,b)=> b-a[0]);

}

console.log(funcOne(1,2,3,4,5,6));