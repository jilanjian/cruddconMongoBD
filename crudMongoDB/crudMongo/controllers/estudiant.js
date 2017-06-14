'use strict'

const Estudiant = require ('../models/estudiantes')

function getEstudiant (req, res) {
    let estudiantId = req.params.estudiantId
    
    Estudiant.findById(estudiantId, (err, estudiant) => {
        if (err) return res.status(500).send({message:`Error en Petición: ${err}`})
        if (!estudiant) return res.status(404).send({message:`Estudiante no esta registrado`})
        res.status(200).send({estudiant: estudiant})
    })
}

function getEstudiants (req, res) {
    
        Estudiant.find({},(err, estudiants) => {
        if (err) return res.status(500).send({message:`Error en Petición: ${err}`})
        if (!estudiants) return res.status(404).send({message:`Estudiante no esta registrado`})
        res.send(200, {estudiants})
})
    
}

function saveEstudiant (req, res) {
     console.log('POST/api/estudiant')
    console.log(req.body)
    
    let estudiant = new Estudiant()
    estudiant.name = req.body.name
    estudiant.apellido = req.body.apellido,
    estudiant.cedula =  req.body.cedula,
    estudiant.carrera = req.body.carrera,
    estudiant.fecha =  req.body.fecha
    
    estudiant.save((err, estudiantStored) =>{
        if (err) res.status(500).send({message: `ERROR BD: ${err}` })
        res.status(200).send({estudiant: estudiantStored})
})
}

function updateEstudiant (req, res) {
   let estudiantId = req.params.estudiantId
   let update = req.body
    
    Estudiant.findByIdAndUpdate(estudiantId, update, (err, estudiantUpdate) => {
        if (err) return res.status(500).send({message:`Error al Act: ${err}`})
    
         res.status(200).send({estudiant: estudiantUpdate})
}) 
}

function deleteEstudiant (req, res) {
    let estudiantId = req.params.estudiantId
    Estudiant.findById(estudiantId, (err, estudiant) => {
        if (err) return res.status(500).send({message:`Error en Petición: ${err}`})
        
        estudiant.remove(err => {
            if (err) return res.status(500).send({message:`Error al borrar: ${err}`})
            res.status(200).send({message: 'El estudiante ha sido eliminado'})
           })  
        })
    
}

module.exports = {
    getEstudiant,
    getEstudiants,
    saveEstudiant,
    updateEstudiant,
    deleteEstudiant
}
