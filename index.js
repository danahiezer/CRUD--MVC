// index.js
// Responsabilidad: arrancar el servidor y conectar las rutas

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000

// Conectar a MongoDB
mongoose.connect('mongodb://192.168.21.143:27017/learn_it_love_it')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log('Error conectando a MongoDB:', err))

// Motor de plantillas
app.set('view engine', 'ejs')

// express sirve los archivos de la carpeta public directo al navegador 
app.use(express.static('public'))

// dice a express que lea datos del form html y ponga en req.body o si no estaria vacio siempre
app.use(express.urlencoded({ extended: true}))

// Rutas
const temaRoutes = require('./routes/temaRoutes')
app.use('/temas', temaRoutes)

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/temas`)
})