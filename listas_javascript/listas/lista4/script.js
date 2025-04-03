//LISTA 04

// ex001
var btn1 = document.getElementById("l4-01");

function ex001() {
    var macas = Number(prompt("Quantas maças você comprou?"));
    var precoMenosDuzia = 1.30;
    var precoDuzia = 1;

    if (macas <= 12) {
        preco = macas * precoMenosDuzia;

        alert(`${macas} compradas. Valor total: ${preco}`);
    } else {
        preco = macas * precoDuzia;

        alert(`${macas} compradas. Valor total: ${preco}`);
    }
}

btn1.addEventListener("click", ex001);


// ex002
const btn2 = document.getElementById("l4-02");

function ex002() {
    var n1 = Number(prompt("Digite o primeiro valor"));
    var n2 = Number(prompt("Digite o segundo valor"));
    var n3 = Number(prompt("Digite o terceiro valor"));

    if (n1 > n2 && n1 > n3) {
        prompt(`${n1} é o maior número`);
    } else if (n2 > n1 && n2 > n3) {
        prompt(`${n2} é o maior número`);
    } else {
        prompt(`${n3} é o maior número`);
    }
}
btn2.addEventListener("click", ex002);


// ex003
const btn3 = document.getElementById("l4-03");

function ex003() {
    var valorCompra = Number(prompt("Insira o valor da compra"));
    var desconto = valorCompra * 0.10;
    var compraDesconto = valorCompra - desconto;

    if (valorCompra >= 100) {
        alert(`Compra no valor de ${valorCompra.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})} recebeu um desconto de 10%.
Novo valor: ${compraDesconto.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})}`);
    } else {
        alert(`Compra no valor de ${valorCompra.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})}`);
    }
}
btn3.addEventListener("click", ex003);


// ex004
const btn4 = document.getElementById("l4-04");

function ex004() {
    var temperatura = Number(prompt("Digite a temperatura"));

    if (temperatura < 0) {
        alert("Muito frio");
    } else if (temperatura < 20) {
        alert("Frio");
    } else if (temperatura < 30) {
        alert("Agrádavel");
    } else {
        alert("Calor");
    }
}
btn4.addEventListener("click", ex004);


// ex005
const btn5 = document.getElementById("l4-05");

function ex005() {
    var idade = Number(prompt("Digite a sua idade"));

    if (idade >= 18 && idade <=70) {
        alert("Você é obrigado a votar");
    } else {
        alert("Você não é obrigado a votar");
    } 
}
btn5.addEventListener("click", ex005);


// ex006
const btn6 = document.getElementById("l4-06");

function ex006() {
    var nota = Number(prompt("Digite a sua nota"));

    if (nota > 100 || nota < 0) {
        alert("Digite uma nota entre 0 e 100");
    } else if (nota >= 90) {
        alert(`Nota ${nota} - A`);
    } else if (nota >= 80 && nota <= 89) {
        alert(`Nota ${nota} - B`);
    } else if (nota >= 70 && nota <= 79) {
        alert(`Nota ${nota} - C`);
    } else if (nota >= 60 && nota <= 69) {
        alert(`Nota ${nota} - D`);
    } else if (nota <= 60) {
        alert(`Nota ${nota} - F`);
    }
}
btn6.addEventListener("click", ex006);


// ex007
const btn7 = document.getElementById("l4-07");

function ex007() {
    var idade = Number(prompt("Digite sua idade"));

    if (idade < 12) {
        alert("Ingresso Infantil");
    } else if (idade >= 12 && idade <= 17) {
        alert("Ingresso Adolescente");
    } else if (idade >= 18 && idade <=64 ) {
        alert("Ingresso Adulto");
    } else {
        alert("Ingresso Sênior");
    }
}
btn7.addEventListener("click", ex007);

// ex008
const btn8 = document.getElementById("l4-08");

function ex008() {
    var temp = Number(prompt("Digite a temperatura em Celsius"));
    var conversao = (temp * 1.8) + 32
    
    alert(conversao)
}
btn8.addEventListener("click", ex008);

// ex009
const btn9 = document.getElementById("l4-09");

function ex009() {
    var temp = Number(prompt("Digite a temperatura em Fahrenheit"));
    var conversao = (temp - 32) * 5 / 9

    alert(conversao)
}
btn9.addEventListener("click", ex009);

// ex010
const btn10 = document.getElementById("l4-10");

function ex010() {
    var velocidade = Number(prompt("Insira a velocidade (em km/h)"))
    var tempo = Number(prompt("Insira o tempo (em horas)"))
    var distancia = velocidade * tempo

    alert(`Você percorreu ${distancia} km em ${tempo} horas.`)
}
btn10.addEventListener("click", ex010);