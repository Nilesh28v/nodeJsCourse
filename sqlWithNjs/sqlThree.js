const sql = require('mssql');
const pool = require('./exportConn');

// pool.getPool().then(async (pool) => {
//     let result1 = await pool.request()       //****Insert****
//     .input('id', sql.Int, 2)
//     .input('name',sql.VarChar,'abcd')
//     .input('age',sql.Int,24)
//     .query('insert into npm values(@id,@name,@age)')
    
//     console.dir(result1)
// }).catch((e) => {
//     console.error(e);
// });


pool.getPool().then(async (pool) => {               //****Update****
    let result1 = await pool.request()
    .input('id', sql.Int, 2)
    .query('update npm set age= 25 where id=@id')
    
    console.dir(result1)
}).catch((e) => {
    console.error(e);
});

pool.getPool().then(async (pool) => {               //****Select****
    let result1 = await pool.request()
    .query('select * from npm')
    
    console.dir(result1)
}).catch((e) => {
    console.error(e);
});




