// responsabilidad: deifinir que controlador se llama segun la URL
const express = require('express')
const router = express.Router()
const {
    listarTemas,
    mostrarEditorForm,
    mostrarFormulario,
    crearTemacontroller,
    actualizarTemacontroller,
    eliminarTemaController,
    votarTema,
    formrenlace,
    agregarenlace,
    votarEnlace
} = require('../controllers/temaController')

router.get('/', listarTemas) // ver lista
router.get('/crear', mostrarFormulario) // ver form para crear
router.post('/crear', crearTemacontroller)// enviar form crear
router.get('/:id/editar', mostrarEditorForm)// ver form editar 
router.post('/:id/editar', actualizarTemacontroller)// enviar form editar
router.post('/:id/eliminar', eliminarTemaController)// eliminar tema
router.post('/:id/votar', votarTema) // votos de temas
router.get('/:id/enlaces', formrenlace)
router.post('/:id/enlaces', agregarenlace)
router.post('/:id/enlaces/:enlaceId/votar', votarEnlace)

module.exports = router
