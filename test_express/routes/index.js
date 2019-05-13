var express = require('express');
var router = express.Router();
var item = require('../models/item');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index/test', function(req, res, next) {
  res.render('test', { title: 'Test'});
});

router.get('/index/item', function (req, res, next) {


  //res.header('content-type','json');
  res.json({'test': 'test'});
  next();

});

module.exports = router;
