var valor = Number(prompt("Número em Reais para a conversão"))
var cambio = 5.30
var conversao = valor / cambio

alert(`${valor.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})} = ${conversao.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)