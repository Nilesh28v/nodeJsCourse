let order =(call_production)=>{
    console.log("order placed, please call production");
    call_production();
}

let production =()=>{
    console.log("order received, stating production");

};
order(production);