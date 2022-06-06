function fetchData(callback){
    console.log("fetching Data...");
    setTimeout(()=>{
        console.log("Data fetched...");
        callback();
    },2000);
}

console.log("line1");
fetchData(()=>{
    console.log("line4");
});