var numero = Number(prompt("Digite um valor para formatação"));

alert(numero.toLocaleString('pt-BR', {style: 'currency', currency: "BRL"}));