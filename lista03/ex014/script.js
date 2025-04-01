var graus = Number(prompt("Digite a temperatura em graus Celsius"));

if (graus < 15) {
    alert("Frio");
} else if (graus >= 15 && graus < 25) {
    alert("Agradável");
} else {
    alert("Quente");
}