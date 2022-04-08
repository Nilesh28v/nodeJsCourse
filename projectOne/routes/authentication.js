var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/auth', function (req, res, next) {
    const privateKey = '!@#DFTbnhu*';
    const pool = require('../sqlserver');
    if (req.body.email && req.body.lname) {
        pool.getPool().then(async (pool) => {
            let result = await pool.request()
                .input('email', req.body.email)
                .input('lname', req.body.lname)
                .query(`SELECT * FROM student WHERE email = @email AND lname=@lname`);
            if (result.recordset.length) {
                try {
                    const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'HS256' });
                    const info = {
                        username: result.recordset[0].email,
                        code: token,
                        role: 'student'
                    }
                    res.cookie('info', info, { maxAge: 150000 });

                    res.redirect('/homePage')
                } catch (err) {
                    res.render('login', { errMsg: err });
                }

            } else {
                res.render('login', { errMsg: 'Record not found or invalid user name password' });
            }
        }).catch((e) => {
            console.error(e);
        })
    } else {
        res.render('login', { errMsg: 'Enter email and password' });
    }
});



router.get('/homePage', function (req, res) {
    res.render('homePage');
});

module.exports = router;