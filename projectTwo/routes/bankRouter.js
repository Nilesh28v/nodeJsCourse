var express = require('express');
var router = express.Router();




router.get('/bankForm', function (req, res, next) {
    res.render('bankLogin', { errMsg: '', msg: '' });
});


router.post('/bankDetails', function (req, res, next) {
    res.render('submitBank');
});



module.exports = router;