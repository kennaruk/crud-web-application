var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
  res.render('add.ejs', { title: 'Express' });
});

router.get('/edit', function(req, res, next) {
  res.render('edit.ejs', { title: 'Express' });
});

router.get('/layout', function(req, res, next) {
  res.render('layout.ejs', { title: 'Express' });
});

module.exports = router;
