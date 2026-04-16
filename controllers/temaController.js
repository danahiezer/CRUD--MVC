// controllers/temacontrollers.js
const Tema = require('../models/temaModel')

// listar todos los temas
const listarTemas = async (req, res) => {
    const temas = await Tema.find().sort({ votos: -1}) // ordena los temas de mayor a menor
    res.render('temas', {temas}) // render = prepara y muestra los datos al usuario
}

// mostrar formulario para crear tema
const mostrarFormulario = (req, res) => {
    res.render('crear') // render = prepara y muestra los datos al usuario
}

// crear un tema nuevo
const crearTemacontroller = async (req, res) => {
    const { titulo } = req.body // guarda datos que vienen de un formulario html
    await Tema.create({ titulo })
    res.redirect('/temas') // manda al navegador a otra url
}

// mostrar formulario para editar tema
const mostrarEditorForm = async (req, res) => {
    const tema = await Tema.findById(req.params.id) // encuentra el tema por su id 
    res.render('editar', {tema}) // render = prepara y muestra los datos al usuario
}

// actualizar un tema
const actualizarTemacontroller = async (req, res) => {
    const { titulo } = req.body // guarda datos que vienen de un formulario html
    await Tema.findByIdAndUpdate(req.params.id, { titulo }) // actualiza los datos del tema 
    res.redirect('/temas') // manda al navegador a otra url
}

// eliminar un tema
const eliminarTemaController = async (req, res) => {
    await Tema.findByIdAndDelete(req.params.id) // elimina el tema 
    res.redirect('/temas') // manda al navegador a otra url
}

const votarTema = async (req, res) => {
    const tema = await Tema.findByIdAndUpdate( // actualiza datos de votos
        req.params.id,
        { $inc: { votos: 1 } }, // operador de MongodDB para incrementar un valor
        {returnDocument: 'after'} // actualiza y luego dice a mongoose que devuelva documentos actualizados
    )
    res.json({ votos: tema.votos }) // devuelve json para que js de navegador lea y actualice contador en pantalla
    
}

module.exports = {
    listarTemas,
    crearTemacontroller,
    mostrarFormulario,
    mostrarEditorForm,
    actualizarTemacontroller,
    eliminarTemaController,
    votarTema
 }
