// public/js/votar.ja

document.querySelectorAll('.btn-votar').forEach(boton => { // selecciona un boton de temas y ejecuta una accion
    boton.addEventListener('click', async (e) => { // escucha el click de ese boton
        const id = e.target.dataset.id // lee el atributo data-id de temas

        const respuesta = await fetch(`/temas/${id}/votar`, { // envia peticion al server sin recargar pagina
            method: 'POST'
        })

        const datos = await respuesta.json() // espera que se cumpla la promesa y kuego devuelve la respuesta en json

        // actualizar el contador
        const li = document.getElementById(`tema-${id}`)
        li.querySelector('.contador-votos').textContent = datos.votos // actualiza nro de votos sin recargar pagina

        // reordenar la lista de temas
        const ul = li.parentElement
        const items = Array.from(ul.querySelectorAll('li')) // convierte los li de la lista en arrays para ordenarlos

        items.sort((a, b) => { // sort ordena el array de mayor a menor en votos
            const votosA = parseInt(a.querySelector('.contador-votos').textContent)
            const votosB = parseInt(b.querySelector('.contador-votos').textContent)
            return votosB - votosA
        })

        items.forEach(item => ul.appendChild(item)) // inserta li en un nuevo orden y el navegador los mueve automaticamente sin recargar 

    })
})
