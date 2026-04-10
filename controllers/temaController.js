// controllers/temacontrollers.js
const { obtenerTemas, crearTema, actualizarTema, eliminarTema } = require('../models/temaModel')

// listar todos los temas
const listarTemas = (req, res) => {
    const temas = obtenerTemas()
    res.render('temas', {temas}) // render = prepara y muestra los datos al usuario
}

// mostrar formulario para crear tema
const mostrarFormulario = (req, res) => {
    res.render('crear') // render = prepara y muestra los datos al usuario
}

// crear un tema nuevo
const crearTemacontroller = (req, res) => {
    const { titulo } = req.body // guarda datos que vienen de un formulario html
    crearTema(titulo)
    res.redirect('/temas') // manda al navegador a otra url
}

// mostrar formulario para editar tema
const mostrarEditorForm = (req, res) => {
    const temas = obtenerTemas()
    const tema = temas.find(t => t.id === parseInt(req.params.id)) // captura el valor de la url (/temas/3/editar) entonces (req.param.id) = 3
    res.render('editar', {tema}) // render = prepara y muestra los datos al usuario
}

// actualizar un tema
const actualizarTemacontroller = (req, res) => {
    const { titulo } = req.body // guarda datos que vienen de un formulario html
    actualizarTema(req.params.id, titulo)
    res.redirect('/temas') // manda al navegador a otra url
}

// eliminar un tema
const eliminarTemaController = (req, res) => {
    eliminarTema(req.params.id)
    res.redirect('/temas') // manda al navegador a otra url
}

module.exports = {
    listarTemas,
    crearTemacontroller,
    mostrarFormulario,
    mostrarEditorForm,
    actualizarTemacontroller,
    eliminarTemaController
 }
