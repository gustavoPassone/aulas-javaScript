var idade = Number(prompt("Digite sua idade"));

if (idade < 18) {
    alert(`Maioridade no Brasil: NÃO
Maioridade nos EUA: NÃO`)
} else if (idade >= 18 && idade < 21) {
    alert(`Maioridade no Brasil: SIM
Maioridade nos EUA: NÃO`)
} else if (idade >= 21) {
    alert(`Maioridade no Brasil: SIM
Maioridade nos EUA: SIM`)
}