var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crudd');

var Estudiantes = mongoose.model('Estudiantes', mongoose.Schema({
	nombre:String,
	apellido:String,
	cedula:Number,
	carrera:String,
	fecha:String
}));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/estudiantes'));

app.get('/api/estudiantes', function(req, res){
	Estudiantes.find(function(err, estudiantes){
		if(err)
			res.send(err);
		res.json(estudiantes);
	});
});

app.get('/api/estudiantes/:id', function(req, res){
	Estudiantes.findOne({_id:req.params.id}, function(err, estudiante){
		if(err)
			res.send(err);
		res.json(estudiante);
	});
});


app.post('/api/estudiantes', function(req, res){
	Estudiantes.create(req.body, function(err, estudiantes){
		if(err)
			res.send(err);
		res.json(estudiantes);
	});
});

app.delete('/api/estudiantes/:id', function(req, res){
	Estudiantes.findOneAndRemove({_id:req.params.id}, function(err, estudiante){
		if(err)
			res.send(err);
		res.json(estudiante);
	});
});

app.put('/api/estudiantes/:id', function(req, res){
    
    var query = {
       nombre :req.body.nombre,
       apellido:req.body.apellido,
       cedula:req.body.cedula,
       carrera:req.body.carrera,
       fecha:req.body.fecha
	};
	Estudiantes.findOneAndUpdate({_id:req.params.id}, query, function(err, estudiante){
		if(err)
			res.send(err);
		res.json(estudiante);
	});
});

app.listen(3000, function(){
    console.log('CONECTO EN 3000')
    
});


