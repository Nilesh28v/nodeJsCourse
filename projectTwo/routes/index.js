var express = require('express');
var router = express.Router();
const connection = require('../utils/authorization');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const nodemailer = require("nodemailer");
const { parse } = require('json2csv');
var smtpTransport = require('nodemailer-smtp-transport');
var express = require('express');
var router = express.Router();
const conn = require('../mongoConn');
const CSV = require('csv-string');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/checkLogin', function (req, res, next) {
  const { bid, password } = req.body;
  console.log(bid, password);
  conn.connFun().then(async (db) => {
    console.log('start');
    console.log('Connected successfully to server');
    const collection = db.collection('signUp');
    const findResult = await collection.find({ bid: bid }).toArray();
    if (findResult[0].password == password) {
      console.log('sucess!');
      res.render('welcome')
    } else {
      console.log('failed!');
      res.render('index')
    }

  }).catch((e) => {
    console.error(e);
  })
})



router.post('/postData', function (req, res, next) {
  const { Description, Deposits } = req.body;
  console.log(Description, Deposits);
  conn.connFun().then(async (db) => {
    const collection = db.collection('reqData');
    const insertResult = await collection.insertOne({Description,Deposits,"status":"new"});
    console.log('Found documents=>', insertResult);
  });
});









  router.post('/checkWelcome', function (req, res, next) {
    const { Description, Deposits } = req.body;
    console.log(Description, Deposits);
    conn.connFun().then(async (db) => {
      console.log('start');

           console.log('start');


      const collection = db.collection('transDetails');
      const count = await db.collection('transDetails').countDocuments();
      console.log(count, 'this is the count of data')
      const batch = 300;
      const batchCount = Math.round(count / batch);
      console.log(batchCount);
      // fs.writeFileSync('result.csv')
      for (let num = 0; num < batchCount; num++) {
        console.log('for loop started');
        const findResult = await collection.find({ Description: Description }, { Deposits: parseInt(Deposits) }).limit(batchCount).skip((num * batchCount)).toArray();
        //const csv = parse(findResult, ["_id", "Date", "Description", "Deposits", "Withdrawls", "Balance"]);
        if (findResult.length === 0) {
          console.log('No record found')
        } else {
          var csv = parse(findResult, ["_id", "Date", "Description", "Deposits", "Withdrawls", "Balance"]);
          fs.appendFile('result.csv', csv, function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
          });

        }
        // console.log(findResult);
        // csvArray.push(findResult);

      }




      // var findResult = await collection.find({ Description: Description }, { Deposits: Deposits }).toArray().then((result) => {
      //   console.log(result)
      // if (findResult.length ===0) {
      //   res.send('no records found!')
      //   console.log(result, "result")
      // }

      // else {

      //fs.writeFileSync('result.csv', csv)
      // console.log(csv,"csv")
      var transporter = nodemailer.createTransport({
        service: "hotmail",
        port: 587,
        auth: {
          user: "nilesh28vishwakarma@gmail.com",
          pass: "Nilesh@278",
        },
      });

      transporter.sendMail(
        {
          from: "nilesh28vishwakarma@gmail.com",
          to: "nilesh28vishwakarma@gmail.com",
          subject: "**IMPORTANT**RECORD**",
          text: "Please check the attachment for your reference! ",
          html: "<b>You asked for some Bank Details, There is a file containing all Details </b>",

          attachments: [
            {
              filename: "result.csv",
              content: csv

            },
          ],
        },
        (err, info) => {
          if (err) {
            console.log("Error occurred. " + err.message);
            return process.exit(1);
          }
          console.log("Message sent to you Email: %s", info.messageId);
          // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          //res.send("Message sent: %s", info.messageId);
        }
      );
      res.send("<h2>Message sent to your Email:</h2>");


      //}



    }).catch((error) => {
      console.log(error);
    })

  })
  module.exports = router;