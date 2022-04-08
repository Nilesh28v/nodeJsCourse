var express = require('express');
const sql = require('mssql');
var router= express.Router();

router.get('/getRouter',function(req,res,next){
    const pool = require('../sqlserver');
    pool.getPool().then(async(pool)=>{
        let result = await pool.request().query(`select * from student`);
        res.render('getRouter',{student : result.recordset});

    }).catch((e) =>{
        console.log(e);
    })
});
router.get('/deleteRecord/:id', function(req, res, next) {
    const pool = require('../sqlserver');
    pool.getPool().then(async (pool) => {
      let result = await pool.request()
    .query(`DELETE FROM student WHERE TestID=${req.params.id}`);
      res.redirect('/getRecord');
  
    }).catch((e) => {
      console.error(e);
    })
  });
  
  router.get('/getRecordById/:id', function(req, res, next) {
    const pool = require('../sqlserver');
  pool.getPool().then(async (pool) => {
    let result = await pool.request()
    .input('TestID', sql.Int,req.params.id)
    .query(`select * from student WHERE TestID=@TestID`);
    res.render('edit', { student: result.recordset[0]});
    
  }).catch((e) => {
    console.error(e);
  })
  });
  
  router.post('/updateRecordById', function(req, res, next) {
    const pool = require('../sqlserver');
  pool.getPool().then(async (pool) => {
    let result = await pool.request()
      .input('fname', sql.NVarChar,req.body.fname)
     .input('lname', sql.NVarChar,req.body.lname)
     .input('email', sql.NVarChar,req.body.email)
     
   .query(`UPDATE student
    SET fname=@fname, lname=@lname, email=@email
    WHERE TestID=${req.query.id}`);
    res.redirect('getRecord')
}).catch((e) => {
    console.error(e);
  })
  });

module.exports=router;