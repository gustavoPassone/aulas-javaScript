var valorCompra = Number(prompt("Digite o valor da compra: "));
var codigoDesconto = prompt("Digite o cupom de desconto: ");
var percentual = 0.10;
var valorDesconto = valorCompra * percentual;

if (codigoDesconto.toUpperCase() == "DESC10") {
    alert(`Compra no valor de ${valorCompra.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})} recebeu um desconto de 10%.
Novo valor: ${valorDesconto.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})}`)
} else {
    alert(`Cupom invalido.
Valor da compra: ${valorCompra.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})}`);
}