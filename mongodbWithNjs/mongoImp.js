const conn = require('./mongoConn');

conn.connFun().then(async (db) => {
    const collection = db.collection('documents');
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult.length);
    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    const findResult2 = await collection.find({}).toArray();
    console.log('Found documents =>', findResult2.length);
}).catch((e) => {
    console.log(e);
})