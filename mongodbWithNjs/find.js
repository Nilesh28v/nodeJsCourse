const sql = require('mongodb');



pool.main().then(async (pool) => {               //****Create****
    let result1 = await pool.request()
    
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    
    console.dir(result1)
}).catch((e) => {
    console.error(e);
});