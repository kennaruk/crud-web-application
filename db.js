var mysql      = require('mysql');
var query = require('./query.js')
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'crud_application',
  timeout: 60000
});


connection.connect((err) => {
  if(!err)
    console.log('Database connection success.');
  else
    console.log('Database connection error. \nerr:'+err);
});

connection.query(query.create_table_items, (err, results, fields) => {
  if(err)
    console.log(err);
  else
    console.log('Create TABLE items if not exists success.');
});

connection.query(query.create_table_users, (err, results, fields) => {
  if(err)
    console.log(err);
  else
    console.log('Create TABLE users if not exists success.');
});

exports.fetchData = (callback) => {
  var err_response_1, err_response_2;
  connection.query(query.insert_into_items, (err, results, fields) => {
    err_response_1 = err;
    if(err)
      console.log(err);
    else
      console.log('Insert into items success.');
  });

  connection.query(query.insert_into_users, (err, results, fields) => {
    err_response_2 = err;
    if(err)
      console.log(err);
    else
      console.log('Insert into users success.');
  });

  callback(err_response_1 && err_response_2);
}

exports.getItems = (callback) => {
  connection.query('SELECT * from items;', (err, results, fields) => {
    if(err)
      console.log('Get Items Error.');
    callback(results);
  });
}

exports.getItemById = (item_id, callback) => {
  connection.query('SELECT * from items WHERE item_id='+item_id+';', (err, results, fields) => {
    if(err)
      console.log('Get item by id error.');
    callback(results);
  });
}

exports.updateItem = (payload, callback) => {
  var execute = "UPDATE items SET item_name = '"+payload.item_name+"', item_picture = '"+payload.item_picture+"', item_price = "+payload.item_price+", item_stock = "+payload.item_stock+" WHERE item_id = "+payload.item_id;
  console.log(execute);
  connection.query(execute,
    (err, results, fields) => {
      if(err)
        console.log('Update Item Error.');
      callback(err);
    });
}
