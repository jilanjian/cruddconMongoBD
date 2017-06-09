var express = require('express');
var mongoose = require ('mongoose');
var app = express();

app.get('/', function(req, res){
    res.send('<h1>CONECTO AL PUERTO 27017</h1>');
    
});

app.listen(27017);
console.log('Servidor Express escuchando en puerto 27017');