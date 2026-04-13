// responsabilidad: deifinir que controlador se llama segun la URL
const express = require('express')
const router = express.Router()
const {
    listarTemas,
    mostrarEditorForm,
    mostrarFormulario,
    crearTemacontroller,
    actualizarTemacontroller,
    eliminarTemaController
} = require('../controllers/temaController')

router.get('/', listarTemas) // ver lista
router.get('/crear', mostrarFormulario) // ver form para crear
router.post('/crear', crearTemacontroller)// enviar form crear
router.get('/:id/editar', mostrarEditorForm)// ver form editar 
router.post('/:id/editar', actualizarTemacontroller)// enviar form editar
router.post('/:id/elimnar', eliminarTemaController)// eliminar tema

module.exports = router
