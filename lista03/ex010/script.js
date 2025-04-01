var numero = Number(prompt("Digite um número para saber se é Par ou Ímpar"));
var calculo = numero % 2;

if (calculo == 0) {
    alert(`O número ${numero} é Par.`);
} else {
    alert(`O número ${numero} é Ímpar.`);
}