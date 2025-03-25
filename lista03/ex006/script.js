var altura = Number(prompt("Digite a sua altura. Exemplo: 1,80"));
var peso = Number(prompt("Digite o seu peso. Exemplo: 60,10"));
var imc = peso / (altura * altura)

if (imc < 18.5) {
    alert("Abaixo do peso")
} else if (imc <= 18.5 || imc >=14.9) {
    alert("Peso normal")
} else {
    alert("Obesidade")
}