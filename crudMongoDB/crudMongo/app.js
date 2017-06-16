'use strict'

const express = require('express')
const bodyParser = require ('body-parser')
const app = express()
const estudiantCtrl = require ('./controllers/estudiant')

    
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

 
app.get('/api/estudiant', estudiantCtrl.getEstudiants)
app.get('/api/estudiant/:estudiantId', estudiantCtrl.getEstudiant)
app.post('/api/estudiant', estudiantCtrl.saveEstudiant )
app.put('/api/estudiant/:estudiantId', estudiantCtrl.updateEstudiant)
app.delete('/api/estudiant/:estudiantId', estudiantCtrl.deleteEstudiant)





module.exports = app

