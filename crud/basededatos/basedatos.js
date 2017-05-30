var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'crud'
    
});
connection.connect();

connection.query('select * from crud', function(err,rows, fields){
    if (err) throw err;
        console.log('no muestra', rows);
    });

connection.end();

module.exports = connection;
