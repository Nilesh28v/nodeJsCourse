var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mobile', function(req, res, next) {
  res.render('mobileRouter', {mobileData: {name: 'mi',model:2024} });
});  

module.exports = router;
