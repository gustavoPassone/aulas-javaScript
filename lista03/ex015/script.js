var nota = Number(prompt("Escreva sua nota"));

if (nota > 10) {
    alert("Escreva um número de 0 a 10")
} else if(nota >= 9) {
    alert("Excelente")
} else if (nota <= 8 && nota >= 7) {
    alert("Bom")
} else if (nota <= 6 && nota >= 5) {
    alert("Regular")
} else {
    alert("Insuficiente")
}