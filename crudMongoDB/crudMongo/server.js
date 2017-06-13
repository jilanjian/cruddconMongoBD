'use strict'

const express = require('express')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')

const Estudiant = require ('./models/estudiantes')

const app = express ()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

app.get('/api/estudiant', (req, res) =>{
    Estudiant.find({},(err, estudiants) => {
        if (err) return res.status(500).send({message:`Error en Petición: ${err}`})
        if (!estudiants) return res.status(404).send({message:`Estudiante no esta registrado`})
        res.send(200, {estudiants})
    
})
})
app.get('/api/estudiant/:estudiantId', (req, res) =>{
    let estudiantId = req.params.estudiantId
    
    Estudiant.findById(estudiantId, (err, estudiant) => {
        if (err) return res.status(500).send({message:`Error en Petición: ${err}`})
        if (!estudiant) return res.status(404).send({message:`Estudiante no esta registrado`})
        res.status(200).send({estudiant: estudiant})
    })
})

app.post('/api/estudiant', (req, res) =>{
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
})


app.put('/api/estudiant/:estudiantId', (req, res) =>{ 
    let estudiantId = req.params.estudiantId
    let update = req.body
    
    Estudiant.findByIdAndUpdate(estudiantId, update, (err, estudiantUpdate) => {
        if (err) return res.status(500).send({message:`Error al Act: ${err}`})
    
         res.status(200).send({estudiant: estudiantUpdate})
})
})

app.delete('/api/estudiant/:estudiantId', (req, res) =>{ 
    let estudiantId = req.params.estudiantId
    Estudiant.findById(estudiantId, (err, estudiant) => {
        if (err) return res.status(500).send({message:`Error en Petición: ${err}`})
        
        estudiant.remove(err => {
            if (err) return res.status(500).send({message:`Error al borrar: ${err}`})
            res.status(200).send({message: 'El estudiante ha sido eliminado'})
           })  
        })
    })


mongoose.connect('mongodb://localhost:27017/crudd', (err, res) => {
    
    if (err) {
      return console.log(`Err al conecta a la BD: ${err}`)
    }
      console.log('Conexion Estable')
    
    app.listen(port, () => {
    console.log(`CORRE EN :${port}`)
})
    
})

