

let stocks={
    fruits:["strawberry","grapes","baanana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};

let order=(fruitName,callProduction)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruitName]} was selected`)
        callProduction();
    },2000); 

}

let production=()=>{
 
    setTimeout(()=>{ 
        console.log("production has started");
        setTimeout(() => {
            
            console.log('the Fruit has been chopped');
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was taken`);
                setTimeout(() => {
                    console.log('the machine was started');
                }, 1000);
                
            }, 1000);
        }, 2000);
        
    },0000);
};

order(0,production);