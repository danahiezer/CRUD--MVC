// index.js
// Responsabilidad: arrancar el servidor y conectar las rutas

const express = require('express')
const app = express()
const PORT = 3000

// Motor de plantillas
app.set('view engine', 'ejs')

// dice a express que lea datos del form html y ponga en req.body o si no estaria vacio siempre
app.use(express.urlencoded({ extended: true}))

// Rutas
const temaRoutes = require('./routes/temaRoutes')
app.use('/temas', temaRoutes)

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})