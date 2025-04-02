//LISTA 04

// ex001

var btn1 = document.getElementById("l4-01")

function ex001() {
    var macas = Number(prompt("Quantas maças você comprou?"))
    var precoMenosDuzia = 1.30
    var precoDuzia = 1

    if (macas <= 12) {
        preco = macas * precoMenosDuzia

        alert(`${macas} compradas. Valor total: ${preco}`)
    } else {
        preco = macas * precoDuzia

        alert(`${macas} compradas. Valor total: ${preco}`)
    }
}

btn1.addEventListener("click", ex001)

// ex002