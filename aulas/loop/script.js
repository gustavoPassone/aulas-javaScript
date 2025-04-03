/* var numero = 10

numero += 1
numero++ */


// 3 partes
var resultados = document.querySelector("#resultados")
var btn = document.querySelector("#btn")

function tabuada() {
    resultados.innerHTML = ''
    var numero = document.getElementById("numero").value

    for(var index = 1; index <= 10; index++) {
        resultados.innerHTML += `<p>${numero} x ${index} = ${numero * index}</p>`
    }
}

btn.addEventListener("click", tabuada)