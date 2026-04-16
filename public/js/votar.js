// public/js/votar.ja

document.querySelectorAll('.btn-votar').forEach(boton => { // selecciona un boton de temas y ejecuta una accion
    boton.addEventListener('click', async (e) => { // escucha el click de ese boton
        const id = e.target.dataset.id // lee el atributo data-id de temas

        const respuesta = await fetch(`/temas/${id}/votar`, { // envia peticion al server sin recargar pagina
            method: 'POST'
        })

        const datos = await respuesta.json() // espera que se cumpla la promesa y kuego devuelve la respuesta en json

        const li = document.getElementById(`tema-${id}`)
        li.querySelector('.contador-votos').textContent = datos.votos // actualiza nro de votos sin recargar pagina

    })
})
