const { MongoClient } = require('mongodb');
const dbName = 'mydb';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const connFun = async () => {
    let result=await client.connect();
    console.log('Connected successfully to server');
    const db = result.db(dbName);
    return db;
}

exports.connFun = connFun;