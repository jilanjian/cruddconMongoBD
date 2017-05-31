var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
    
});
connection.connect();

connection.query('USE crud');

query = connection.query('SELECT * FROM crud', function(err, results, fields) {
    if (err) {
        throw err;
}
  console.log(results);
}
);


connection.end();




