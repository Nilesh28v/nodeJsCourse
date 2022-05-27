var express = require('express');
const conn = require('../mongoConn');
var router = express.Router();

/* GET users listing. */
router.get('/submitBank',function(req,res,next) {
 res.render('submitBank');
});


router.post('/submitBank',function(req,res,next) {
  conn.connFun().then(async (db) => {
  const collection = db.collection('signUp');
  const insertResult = await collection.insertOne(req.body);
  console.log('Found documents=>',insertResult);
  console.log(insertResult);
  }).catch((e) => {
     console.log(e);
  }); 
  res.redirect('/BankForm');

});
   
  module.exports = router;