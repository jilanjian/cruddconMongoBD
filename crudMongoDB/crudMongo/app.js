'use strict'

const express = require('express')
const bodyParser = require ('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')



    
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
app.engine('.jade')
app.use('/api', api)
app.get('/index', (req, res) => {
    res.render('index')
})


module.exports = app

