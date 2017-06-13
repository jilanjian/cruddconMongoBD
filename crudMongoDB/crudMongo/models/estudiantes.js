'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const EstudiantSchema = Schema ({
    nombre: String,
    apellido: String,
    cedula: {type: Number, default: 0},
    carrera: String,
    fecha: {type: Number, default: 0}
    
})

module.exports = mongoose.model('Estudiant', EstudiantSchema)