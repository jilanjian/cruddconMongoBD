getRegistro : function (req, res, next) {
    var connection = require ('./basedatos');
    var db = mysql.createConnection(connection);
    db.connect();
    
    var registro= null;
    db.query('SELECT * FROM registro', function(err, rows, fields){
        if (err) thorw err;
        registro = rows;
        db.end();
        
        res.render ('./basedatos', {registro:registro});
    });
}
getNuevoRegistro:function(req,res,next){
    res.render('./basedatos');
},

    
postNuevoRegistro:function(req,res,next){
    
    var registro = {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        cedula : req.body.cedula,
        carrera : req.body.carrera,
        fecha : req.body.fecha
     }
    
    var connection = require('./basedatos');
    
    var db = mysql.createConnection(connection);
    db.query('INSERT INTO registro SET ?', registro,function(err, rows, fields){
        if (err) thorw err;
        db.end();
        
    });
    
}

