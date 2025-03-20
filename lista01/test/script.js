function calcular() {
    var v1 = Number(document.getElementById("valor1".value)) 
    var v2 = Number(document.getElementById("valor2".value)) 

    var resultado = v1 + v2

    document.getElementById("resultado").textContent = "Resultado: " + resultado
}