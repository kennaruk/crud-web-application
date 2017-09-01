var express = require('express');
var router = express.Router();
var db = require('../db.js');
var columns = [
  'ID',
  'Name',
  'Picture',
  'Price',
  'Stock',
  'Action'
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
  db.getItems(results => {
    res.render('index.ejs', { title: title, columns: columns, items: results });
  });
});

router.get('/add', function(req, res, next) {
  res.render('add.ejs', { title: title, columns: columns, items: items });
});

router.get('/edit/:item_id', function(req, res, next) {
  var item_id = req.params.item_id;
  db.getItemById(item_id, results => {
    res.render('edit.ejs', { title: title, item: results[0] });
  });
});

router.get('/layout', function(req, res, next) {
  res.render('layout.ejs', { title: title, items: items });
});

router.delete('/delete', function(req, res, next) {
  var item_id = req.body.item_id;
  db.deleteItemById(item_id, err => {
    if(!err)
      db.getItems(results => {
        res.render('item_table.ejs', {title: title, columns: columns, items: results})
      });
    else
      res.json({err: err});
  });
  ;
});


router.post('/edit', function(req, res, next) {
  var payload = {
    item_id : req.body.item_id,
    item_name : req.body.item_name,
    item_picture : req.body.item_picture,
    item_price : req.body.item_price,
    item_stock : req.body.item_stock
 }
 db.updateItem(payload, err => {
   if(!err)
     res.redirect('/');
   else
     res.json({err: err});
 });
});

router.post('/add', function(req, res, next) {
  var payload = {
    item_name : req.body.item_name,
    item_picture : req.body.item_picture,
    item_price : req.body.item_price,
    item_stock : req.body.item_stock
  }
  db.insertItem(payload, err => {
    if(!err)
      res.redirect('/');
    else
      res.json({err: err});
  });
});

router.get('/fetch', function(req, res, next) {
  db.fetchData(err => {
    res.json({
      msg: "fetch new data into database.",
      success: err
    });
  });
});

module.exports = router;
