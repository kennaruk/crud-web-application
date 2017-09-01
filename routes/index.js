var express = require('express');
var router = express.Router();

var columns = [
  'ID',
  'Name',
  'Picture',
  'Price',
  'Stock',
  'Action'
]

var columnn = [
  {
    "name": "ID",
    "type": "text",
    "key": "item_id",
    "placholder": "Item ID"
  },
  {
    "name": "Name",
    "type": "text",
    "key": "item_name",
    "placholder": "Item Name"
  },
  {
    "name": "Picture",
    "type": "text",
    "key": "item_picture",
    "placholder": "Item Picture URL"
  },
  {
    "name": "Price",
    "type": "text",
    "key": "item_price",
    "placholder": "Item Price"
  },
  {
    "name": "Stock",
    "type": "text",
    "key": "item_stock",
    "placholder": "Item Stock Left"
  },
  {
    "name": "Action",
    "type": "bootstrap-button",
    "key": "ActionButton",
    "placholder": "ItemButton"
  }
]

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
  res.render('index.ejs', { title: title, columns: columns, items: items, users: users });
});

router.get('/add', function(req, res, next) {
  res.render('add.ejs', { title: title, columns: columns, items: items, users: users });
});

router.get('/edit/:item_id', function(req, res, next) {
  var item_id = req.params.item_id;
  res.render('edit.ejs', { title: title, columns: columns, items: items, users: users });
});

router.get('/layout', function(req, res, next) {
  res.render('layout.ejs', { title: title, columns: columns, items: items, users: users });
});

//API DATABASE REFERENCES
router.delete('/delete', function(req, res, next) {
  var item_id = req.body.item_id;
  console.log('call delete item by id api.\nitem_id: '+item_id);
  res.render('item_table.ejs', {title: title, columns: columns, items: []});
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
