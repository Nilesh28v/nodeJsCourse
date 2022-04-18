// var express = require('express');
// const sql = require('mssql');
// var router = express.Router();
// const jwt = require('jsonwebtoken');
// const verifyJwtAuth = require('../utils/authorization');
// const moment = require('moment');


// router.get('/updateAttendence', function (req, res, next) {})
// //     try {
// //         verifyJwtAuth(req.cookies.info.code).then((result) => {
// //             if (result === 'Verified Successfully') {
// //                 const email = req.cookies.info.username;
// //                 const pool = require('../sqlserver');
// //                 pool.getPool().then(async (pool) => {
// //                     let response = await pool.request()
// //                         .input('email', sql.VarChar, email)
// //                         .query(`select * from student WHERE email=@email`);
                   
// //                         const data = response.recordset[0];
// //                         const id = (data.id);
// //                     const updateRecord = await pool.request()
// //                         .input('present', sql.Date, 'default')
// //                         .query(` innsert into studentfk values (id=@id,present=@present) `);
// //                                 res.render('homePage', { msg: 'success' })

                                     
// //                             } else {
                                
// //                                 //res.send('<h3>already updated!</h3>')
// //                                 //res.render('homePage', {Msg: '<h3>Attendence Already Updated</h3>' });
// //                                 res.render('homePage', { msg: 'failure' })

// //                             }
// //                         }
// //                         else {
// //                             const updateRecord = await pool.request()
// //                                 .input('email', sql.VarChar, email)
// //                                 .input('attendenceCount', sql.Int, attendenceCount)
// //                                 .input('lastUpdateDate', sql.DateTime, lastUpdateDate)
// //                                 .input('presentDate', sql.DateTime, presentDate)
// //                                 .query(`update student set attendenceCount=@attendenceCount, lastUpdateDate=@lastUpdateDate ,
// //                             presentDate=@presentDate where email=@email`);
// //                             res.render('homePage', { msg: 'success' });
// //                         }
// //                     }

// //                     else {
// //                         res.render('homePage', { msg: 'failure' })

// //                     }
// //                 }
// //                 ).catch((e) => {
// //                     console.error(e);
// //                 })
// //             } else {
// //                 res.send('<h3>login please!</h3>')
// //             }
// //         })
// //     } catch (err) {
// //         console.log('incorrect token!');
// //         res.send('<h3>login please!</h3>')
// //     }

// // });


// // module.exports = router;