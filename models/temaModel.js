// responsabilidad: manejar los datos de los temas 
let temas = [
    { id: 1, titulo: "como programar como un ninja", votos: 0 },
    {id: 2, titulo: "dominar el arter de preparar cafe", votos: 0}
]

let nextId = 3

// obtener datos de los temas
const obtenerTemas = () => temas

// crear un tema nuevo 
const crearTema = (titulo) => {
    const nuevoTema = { id: nextId++, titulo, votos: 0 }
    temas.push(nuevoTema)
    return nuevoTema
}

// actualizar un tema
const actualizarTema = (id, titulo) => {
    const tema = temas.find(t => t.id === parseInt(id)) // busca el primer elemento que cumpla una condicion
    if (tema) tema.titulo = titulo
    return tema
}

// eliminar un tema
const eliminarTema = (id) => {
    temas = temas.filter(t => t.id !== parseInt(id)) // devuelve un nuevo array sin los elemntos que no cumplan una condicion
}
module.exports = { obtenerTemas, crearTema, actualizarTema, eliminarTema }
