var text = document.getElementById("text")
var btn = document.getElementById("btn")

function mudarTexto() {
    text.innerHTML = "Texto atualizado"
}

btn.addEventListener("click", mudarTexto)