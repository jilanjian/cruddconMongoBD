'use strict'

const express = require('express')
const estudiantCtrl = require ('../controllers/estudiant')
const router = express.Router()



router.get('/estudiant', estudiantCtrl.getEstudiants)
router.get('/estudiant/:estudiantId', estudiantCtrl.getEstudiant)
router.post('/estudiant', estudiantCtrl.saveEstudiant )
router.put('/estudiant/:estudiantId', estudiantCtrl.updateEstudiant)
router.delete('/estudiant/:estudiantId', estudiantCtrl.deleteEstudiant)


module.exports = router
