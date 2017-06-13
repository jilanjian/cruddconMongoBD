'use strict'

const express = require('express')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')

const Estudiant = require ('./models/estudiantes')

const app = express ()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

app.get('/api/estudiantes', (req, res) =>{
    res.send(200,{estudiantes:[]})
})

app.get('/api/estudiantes/:estudiantesId', (req, res) =>{
})

app.post('/api/estudiantes', (req, res) =>{
    console.log('POST/api/estudiantes')
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


app.put('/api/estudiantes/:estudiantesId', (req, res) =>{    
})

app.delete('/api/estudiantes/:estudiantesId', (req, res) =>{    
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

