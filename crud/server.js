var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
 
var app = express();

   app.set('views', __dirname + '/views');
   app.set('view options', { layout: false });
   app.use(express.bodyParser());
   app.use(express.static(__dirname + '/public'));

 
var client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud2',
});

client.database = 'crud2';

app.get('/', function(req, res) {
    
    client.query('SELECT id, nombre, apellido, cedula, carrera, fecha FROM crud2',
            function selectCb(err, results, fields) {
                if (err) {
                    throw err;                  
                }

                res.render('index.jade', { crud2: results });
            }
        );
});


app.post('/nueva', function(req, res) {

    client.query('INSERT INTO equipos (id, nombre, apellido, cedula, carrera, fecha) VALUES (?, ?, ?, ?, ?, ?)', [req.body.id, req.body.nombre, req.body.apellido, req.body.cedula, req.body.carrera, req.body.fecha],
            function() {
                res.redirect('/');
            }
        );
});


app.get('/editar/:id', function(req, res) {
    client.query('SELECT id, nombre, apellido, cedula, carrera, fecha FROM crud2 WHERE id = ?', [req.params.id],
            function selectCb(err, results, fields) {
                if (err) {
                    throw err;                  
                }
                
                res.render('editar.jade', { crud2: results[0] });
            }
        );
});

app.post('/actualizar', function(req, res) {
    client.query('UPDATE crud2 SET id= ?, nombre = ?, apellido = ?, cedula = ?, carrera = ?, fecha = ? WHERE id = ?', [req.body.nombre, req.body.apellido, req.body.cedula, req.body.carrera, req.body.fecha],
            function() {            
                res.redirect('/');
            }
        );
});

app.get('/borrar/:id', function(req, res) {
    client.query('DELETE FROM crud2 WHERE id = ?', [req.params.id],
        function() {
            res.redirect('/');
        }
    );
});

app.listen(3333);
