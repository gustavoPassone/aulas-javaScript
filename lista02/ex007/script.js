var v1 = Number(prompt("Digite o primeiro valor"));
var v2 = Number(prompt("Digite o segundo valor"));
var v3 = Number(prompt("Digite o terceiro valor"));
var media = (v1 + v2 + v3) / 3;

alert(`A média dos valores é ${media.toLocaleString('pt-BR', {style: 'currency', currency: "BRL"})}`);