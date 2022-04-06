let stocks={
    fruits:["strawberry","grapes","baanana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};

let order=(fruitName,callProduction)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruitName]}`)
    },2000); 


    callProduction();
}

let production=()=>{

    setTimeout(()=>{
        console.log("production has started");
    },0000);
};

order(0,production);