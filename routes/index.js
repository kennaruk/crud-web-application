var express = require('express');
var router = express.Router();

var items = [
  {
    "item_id": 1,
    "item_name": "kitkat",
    "item_picture": "google.com",
    "item_price": 30,
    "item_stock": 10
  },
  {
    "item_id": 2,
    "item_name": "kitkat",
    "item_picture": "google.com",
    "item_price": 30,
    "item_stock": 10
  }
]

var users = [
  {
    "user_name": "admin",
    "user_password": "password",
  }
]

var title = "Items Stock | CRUD Web Application"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: title, items: items, users: users });
});

router.get('/add', function(req, res, next) {
  res.render('add.ejs', { title: title, items: items, users: users });
});

router.get('/edit/:item_id', function(req, res, next) {
  var item_id = req.params.item_id;
  res.render('edit.ejs', { title: title, items: items, users: users });
});

router.get('/layout', function(req, res, next) {
  res.render('layout.ejs', { title: title, items: items, users: users });
});

//API DATABASE REFERENCES
router.delete('/delete', function(req, res, next) {
  var item_id = req.body.item_id;
  console.log('call delete item by id api.');
  res.json({});
});


router.post('/edit', function(req, res, next) {
  var item_id = req.body.item_id;
  var item_name = req.body.item_name;
  var item_picture = req.body.item_picture;
  var item_price = req.body.price;
  var item_stock = req.body.stock;
  console.log('call edit item by id api.');
  res.json({});


});

router.post('/add', function(req, res, next) {
  var item_id = req.body.item_id;
  var item_name = req.body.item_name;
  var item_picture = req.body.item_picture;
  var item_price = req.body.price;
  var item_stock = req.body.stock;
  console.log('call add item api.');
  res.json({});

})

module.exports = router;
