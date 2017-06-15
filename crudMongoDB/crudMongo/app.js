'use strict'

const express = require('express')
const bodyParser = require ('body-parser')
const app = express()
const router = express.Router('./routes')


    
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
app.use('./routes', router)
 
module.exports = router
module.exports = app

