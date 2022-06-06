var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mongofind', function(req, res, next) {
    const conn = require('../mongoConn');
    conn.connFun().then(async (db) => {
        const collection = db.collection('student1');
        const findResult = await collection.find({}).toArray();
        console.log(findResult);
        res.render('mongofind', { customer: findResult});
    }).catch((e) => {
        console.log(e);
    })

});

module.exports = router;




