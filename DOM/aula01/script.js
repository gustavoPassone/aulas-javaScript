const btn = document.getElementById('btn')

function mudarConteudo() {
    const titulo = document.querySelector(".titulo")

    titulo.innerText = "Gustavo"
    titulo.classList.toggle("trocarFundo")
}


btn.addEventListener("click", mudarConteudo)


/* const teste = () => {
    alert('teste')
}

btn.addEventListener('click', teste) */
