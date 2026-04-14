// models/temaModel.js
const mongoose = require('mongoose')

// Definir la estructura del documento
const temaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  votos: { type: Number, default: 0 }
})

// Crear el modelo
const Tema = mongoose.model('Tema', temaSchema)

module.exports = Tema
