var preco = Number(prompt("Digite a valor de um produto"));

if (preco < 20) {
    alert("Barato");
} else if (preco >= 20 && preco < 100) {
    alert("Médio");
} else {
    alert("Caro");
}