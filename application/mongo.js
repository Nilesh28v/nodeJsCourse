const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const conn = require('./connectMongo');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/insert', (req, res) => {
   
    conn.connFun().then(async (db) => {
        const collection = db.collection('customers');
        const insertDocs = await collection.insertMany([{ item: 'shubham', qty: 250 }, { item: 'abc', qty: 30 },
         { item: 'icecream', qty: 60 }]);
        console.log('Found documents =>', insertDocs);
        res.send({ status: 200, message: 'user inserted successfully', Customers: insertDocs })

    }).catch((e) => {
        console.log(e);
    })

});

app.post('/show', (req, res) => {
    
    conn.connFun().then(async (db) => {
        const collection = db.collection('customers');
        const find = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
        res.send({ status: 200, message: 'user find successfully', Customers: find })

    }).catch((e) => {
        console.log(e);
    })

});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});