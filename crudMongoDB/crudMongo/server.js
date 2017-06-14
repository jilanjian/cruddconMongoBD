'use strict'

const mongoose = require ('mongoose')
const app = require ('./app')
const port = process.env.PORT || 3001

mongoose.connect('mongodb://localhost:27017/crudd', (err, res) => {
    
    if (err) {
      return console.log(`Err al conecta a la BD: ${err}`)
    }
      console.log('Conexion Estable')
    
    app.listen(port, () => {
    console.log(`CORRE EN :${port}`)
  })
})

