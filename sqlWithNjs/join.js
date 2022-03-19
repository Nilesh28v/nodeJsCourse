const sql = require('mssql');
const pool = require('./exportConn');



pool.getPool().then(async (pool) => {               
    let result1 = await pool.request()
    
    // .query('create table emp(id int,empname varchar(40),age int)')
    .query('create table custo(id int,cusname varchar(50),email varchar(30) ')
    
    console.dir(result1)
}).catch((e) => {
    console.error(e);
});

// pool.getPool().then(async (pool) => {               
//     let result1 = await pool.request()
//     .input('id',sql.Int,1)
//     .input('empname',sql.VarChar,'nilesh')
//     .input('age',sql.Int,25)
//     .query('insert into emp values(@id,@empname,@age)')
//     console.dir(result1)
// }).catch((e) => {
//     console.error(e);
// });

pool.getPool().then(async (pool) => {               
    let result1 = await pool.request()
    .input('id',sql.Int,1)
    .input('cusname',sql.VarChar,'mukesh')
    .input('email',sql.VarChar,'mukesh@gmail.com')
    .query('insert into custo values(@id,@cusname,@email)')
    console.dir(result1)
}).catch((e) => {
    console.error(e);


});