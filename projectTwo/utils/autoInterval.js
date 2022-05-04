var express = require('express');
var router = express.Router();
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const nodemailer = require("nodemailer");
const { parse } = require('json2csv');
var express = require('express');
var router = express.Router();
const conn = require('../mongoConn');
const CSV = require('csv-string');


exports.autoInterval = () => {
    // router.post(function(req,res,next){
    //const {status} = req.body;
    setInterval(function () {

        conn.connFun().then(async (db,req,res) => {
            console.log('autointerval start');
            var collection = db.collection('reqData');        
            const update = await collection.updateOne({ "status": "new" },
                { $set: { "status":"in process..." } }, { multi: true });
            console.log(update)
            
        })


        conn.connFun().then(async (db,req,res) => {

            var collection = db.collection('reqData');
            const findResult = await collection.find().toArray();
            console.log('Deposits values are', findResult);
            Description=findResult.Description;
            Deposits=findResult.Deposits;
            console.log('this are the values $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',Description,Deposits);
        
            console.log('start');

            collection = db.collection('transDetails');
            const count = await db.collection('transDetails').countDocuments();
            console.log(count,'this is the count of data')
            const batch = 300;
            const batchCount = Math.round(count / batch);
            console.log(batchCount);

            for (let num = 0; num < batchCount; num++) {
                console.log('for loop started');
                const findResult = await collection.find({ Description: Description }, { Deposits: parseInt(Deposits) }).limit(batchCount).skip((num * batchCount)).toArray();
                if (findResult.length === 0) {
                    console.log('No record found')
                } else {
                    var csv = parse(findResult, ["_id", "Date", "Description", "Deposits", "Withdrawls", "Balance"]);
                    fs.appendFile('result.csv', csv, function (err) {
                        if (err) throw err;
                        console.log('The "data to append" was appended to file!');
                    });
                }
            }

            var transporter = nodemailer.createTransport({
                service: "hotmail",
                port: 587,
                auth: {
                    user: "nilesh28vishwakarma@gmail.com",
                    pass: "Nilesh@28",
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
            //res.send("<h2>Message sent to your Email:</h2>");
            const update =  collection.updateOne({ "status": "in process..." },
            { $set: { "status": "finished" } }, { multi: true });

        });
        

    }, 60000);
    // })

}
