const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/showMobileDetails', function (req, res) {
    const sql = require('mssql');
const pool = require('./exportConn');

pool.getPool().then(async (pool) => {               //****Create****
    let result1 = await pool.request()
    
    .query('create table rahul(id int,name varchar(40),age int)')
    
    console.dir(result1)
}).catch((e) => {
    console.error(e);
});
});

app.get('/weather', (req, res) => {
    // code and logic that will be executed and return the data back to user/customer
}); 

app.get('/amIAuthorized', function (req, res) {
    res.status(401);
    res.send('Not authorized');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
