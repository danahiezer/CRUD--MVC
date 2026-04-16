// public/js/votar.ja

document.querySelectorAll('.btn-votar').forEach(boton => {
    boton.addEventListener('click', async (e) => {
        const id = e.target.dataset.id

        const respuesta = await fetch(`/temas/${id}/votar`, {
            method: 'POST'
        })

        const datos = await respuesta.json()

        const li = document.getElementById(`tema-${id}`)
        li.querySelector('.contador-votos').textContent = datos.votos

    })
})
