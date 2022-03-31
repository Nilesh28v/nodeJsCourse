var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

router.delete('/delete', function (req, res, next) {
    const conn = require('../mongoConn');
    conn.connFun().then(async (db) => {
        const collection = db.collection('student1');
        const deleteResult = await collection.deleteOne({ _id: ObjectId(req.body.id)},
            { $set: req.body.data });
            res.send({ status: 200, message: 'user Deleted successfully', student1: deleteResult });
    }).catch((e) => {
        console.log(e);
    })

});

module.exports = router;