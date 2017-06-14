'use strict'

const express = require('express')
const estudiantCtrl = require ('../controllers/estudiant')
const api = express.Router()

api.get('/estudiant', estudiantCtrl.getEstudiants)
api.get('/estudiant/:estudiantId', estudiantCtrl.getEstudiant)
api.post('/estudiant', estudiantCtrl.saveEstudiant )
api.put('/estudiant/:estudiantId', estudiantCtrl.updateEstudiant)
api.delete('/estudiant/:estudiantId', estudiantCtrl.deleteEstudiant)


module.exports = api
