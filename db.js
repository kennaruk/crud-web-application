var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'password',
  database : 'crud_application',
  timeout: 60000
});

connection.connect((err) => {
  if(!err) {
    console.log('Database connection success.');
  }
  else {
    console.log('Database connection error. \nerr:'+err);
  }
});

exports.getItems = (callback) => {
  connection.query('SELECT * from item', (err, results, fields) => {
    if(err) {
      console.log('query err');
    }
    callback(results);
  });
}
