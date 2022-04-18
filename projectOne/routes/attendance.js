
var express = require('express');
var router = express.Router();
const moment = require("moment");
const config = require('../util/config');
const sql = require('mssql');
const verifyJwtAuth = require("../util/verifyJwtAuth");
const jwt = require('jsonwebtoken');
router.get('/home/attendance', (req, res) => {
   (async function () {
      try {
         verifyJwtAuth.verifyJwtAuth(req.cookies.info.code).then(async (result) => {
            if (result === 'Verified Successfully') {
               const email = req.cookies.info.email
               console.log(email);
         
         let pool = await sql.connect(config)
         let result1 = await pool.request()
            //.input('id', sql.Int, req.params.id)
            .input('email', sql.NVarChar(50), req.params.email)
            .query("SELECT * FROM student ")
         // console.log(result1.recordset)
         const msg = "";
         res.render('attendance', { data: result1.recordset[0], msg: msg });
            }
         })

      } catch (err) {
         console.log(err)

      }
   })()

   sql.on('error', err => {
      console.log(err);
   })
})

//check in

router.post("/home/updateAttendance", async (req, res) => {
   (async function () {
      try {
         verifyJwtAuth.verifyJwtAuth(req.cookies.info.code).then(async (result) => {
            if (result === 'Verified Successfully') {
               const email = req.cookies.info.email
               console.log(email);
               let pool = await sql.connect(config)
               let user = await pool.request()
                  .input('a_id', sql.Int, req.body.a_id)
                  .query(`select * from attendance   where email='${req.cookies.info.email}' `);

               console.log('email', user)
               const datesObj = new Date();
               const b = datesObj.toISOString();
               const dateTimeFormatUpdate = 'YYYY-MM-DD HH:mm:ss';
               const time = moment.utc().format(dateTimeFormatUpdate);
               const date = moment(time);
               const currentDay = date.format('D');
               console.log('currentDay', currentDay)
               //07-12-2021
               const dateFrmTable = moment(user.recordset[0].lastUpdatedTime);
               const dayFrmTable = dateFrmTable.format('D');
               if (dayFrmTable < currentDay || user.recordset[0].attendancecount === 0) {
                  const attendance = (user.recordset[0].attendancecount) + 1;
                  console.log('attendance', (attendance))
                  const presentDates = new Date(user.recordset[0].presentDates)
                  const attendanceArray = presentDates.toISOString();

                  //console.log('attendanceArray',attendanceArray)
                  const email = req.body.email
                  var users = await pool.request()
                     .input('email', sql.NVarChar(50), req.body.email)
                     .input('attendance', sql.Int, attendance)
                     .input('time', sql.DateTime, time)
                     .input('attendanceArray', sql.Date, attendanceArray)
                     .query(`UPDATE attendance set attendancecount='${attendance}',lastUpdatedTime='${time}',presentDates ='${attendanceArray}' where email='${req.cookies.info.email}'`);
                  console.log(users)
                  console.log('attendace updated!');
                  // const msg="success"
                 
                  res.render('attendance', {  msg: "success" })

               } else {
                  console.log('attendace already updated!');
                  res.render('attendance', {  msg: "failure" })
               }
            }
         })
      }

      catch (error) {
         console.log("something went wrong");
         console.log(error);
      }
   })()
});
module.exports = router;