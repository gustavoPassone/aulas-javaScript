var n1 = Number(prompt("Digite a primeira nota"));
var n2 = Number(prompt("Digite a segunda nota"));
var n3 = Number(prompt("Digite a terceira nota"));
var media = (n1 + n2 + n3) / 3

if (media > 10) {
    alert("Digite apenas notas de 0 a 10")
} else {
    if (media >= 6) {
        alert(`Média de ${media.toFixed(2)} APROVADO`)
    } else {
        alert(`Média de ${media.toFixed(2)} REPROVADO`)    
    }
}