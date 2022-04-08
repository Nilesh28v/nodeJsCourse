var express = require('express');
const sql= require('mssql');
var router = express.Router();

router.get('/getForm', function(req,res,next){
    res.render('showForm');
});

router.post('/postRegDetails', function(req,res,next){
    const pool = require('../sqlserver');
    pool.getPool().then(async(pool)=>{
        let result= await pool.request()
        .input('fname', sql.NVarChar,req.body.fname)
        .input('lname', sql.NVarChar,req.body.lname)
        .input('email', sql.NVarChar,req.body.email)
        .query(`insert into student values(@fname,@lname,@email)`);

    console.dir(result)
    res.redirect('/loginform');

    }).catch((e)=>{
        console.error(e);
    })
});
module.exports = router;