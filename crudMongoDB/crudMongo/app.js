'use strict'

const express = require('express')
const bodyParser = require ('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')


    
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
app.use('/api', api)
app.set('view engine', 'jade')
app.get('/', function (req, res) {
  res.render('index')
})



module.exports = app

