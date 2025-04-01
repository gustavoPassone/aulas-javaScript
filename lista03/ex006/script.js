var altura = Number(prompt("Digite a sua altura. Exemplo: 1.80"));
var peso = Number(prompt("Digite o seu peso. Exemplo: 60.10"));
var imc = peso / (altura * altura)

if (imc < 18.5) {
    alert(`Seu IMC: ${imc.toFixed(2)} 
Você está abaixo do peso`)
} else if (imc >= 18.5 && imc <= 24.9) {
    alert(`Seu IMC: ${imc.toFixed(2)} 
Você está com peso normal`)
} else if (imc >= 25 && imc >= 29.9) {
    alert(`Seu IMC: ${imc.toFixed(2)} 
Você está com sobrepeso`)
} else {
    alert(`Seu IMC: ${imc.toFixed(2)} 
    Você está com obesidade`)
}