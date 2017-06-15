'use strict'

const express = require('express')
const estudiantCtrl = require ('../controllers/estudiant')
const app = express()
const router = express.Router()

 
router.get('/estudiant', estudiantCtrl.getEstudiant)
router.get('/estudiant/:estudiantId', estudiantCtrl.getEstudiants)
router.post('/estudiant', estudiantCtrl.saveEstudiant )
router.put('/estudiant/:estudiantId', estudiantCtrl.updateEstudiant)
router.delete('/estudiant/:estudiantId', estudiantCtrl.deleteEstudiant)




module.exports = app