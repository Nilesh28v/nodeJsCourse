var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const cookievalue={
    userName :'Nilesh',
    role : 'Student'
    
  };

  res.cookie('name',cookievalue,{maxAge:10000  } ); //Sets name = express
  res.render('index', { title: 'Express' });
});

module.exports = router;
 