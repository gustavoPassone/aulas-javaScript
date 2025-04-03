// LISTA 01

// ex001
const btn1 = document.getElementById("l1-01");

function ex001() {
    var nome = prompt("Digite seu primeiro Nome");
    var sobrenome = prompt("Digite seu Sobrenome");
    var nomeCompleto = nome + " " + sobrenome;

    alert("Meu primeiro nome é " + nome + " e sobrenome é " + sobrenome + ". Nome completo é: " + nomeCompleto);
}

btn1.addEventListener("click", ex001)


// ex002
const btn2 = document.getElementById("l1-02");

function ex002() {
    var nome = prompt("Qual seu nome?");
    var cor = prompt("Qual sua cor favorita?");
    
    alery(`${nome} sua cor favorita é ${cor}`)
}

btn2.addEventListener("click", ex002);


// ex003
const btn3 = document.getElementById("l1-03");

function ex003() {
    var numero =  Number(prompt("Digite um número: "));
    var resultado = numero - 1;
    
    alert("O número antecessor de " + numero + " é: " + resultado);
}

btn3.addEventListener("click", ex003);


// ex004
const btn4 = document.getElementById("l1-04");

function ex004() {
    var numero = Number(prompt("Digite um número para descobrir seu sucessor"));
    
    alert("O sucessor de " + numero + " é: " + (numero + 1));
}

btn4.addEventListener("click", ex004);


// ex005
const btn5 = document.getElementById("l1-05");

function ex005() {
    var n1 = Number(prompt("Digite o primeiro número"))
    var n2 = Number(prompt("Digite o segundo número"))
    var resultado = n1 + n2

    alert("A soma dos números é: " + resultado)
}

btn5.addEventListener("click", ex005)


// ex006
const btn6 = document.getElementById("l1-06");

function ex006() {
    var n1 = Number(prompt("Digite o primeiro número"))
    var n2 = Number(prompt("Digite o segundo número"))
    var resultado = n1 / n2

    alert("A divisão dos números é: " + resultado)
}
btn6.addEventListener("click", ex006);


// ex007
const btn7 = document.getElementById("l1-07");

function ex007() {
    var n1 = Number(prompt("Digite o primeiro número"))
    var n2 = Number(prompt("Digite o segundo número"))
    resultado = n1 * n2

    alert("O resultado da multiplicação é: " + resultado)
}
btn7.addEventListener("click", ex007);


// ex008
const btn8 = document.getElementById("l1-08");

function ex008() {
    var n1 = Number(prompt("Digite o primeiro número"))
    var n2 = Number(prompt("Digite o segundo número"))
    resultado = n1 - n2

    alert("O resultado da subtração é: " + resultado)
}
btn8.addEventListener("click", ex008);


// ex009
const btn9 = document.getElementById("l1-09");

function ex009() {
    var n1 = Number(prompt("Digite um número"))
    resultado = n1 * 2

    alert("O dobro do número é: " + resultado)
}
btn9.addEventListener("click", ex009);


// ex010
const btn10 = document.getElementById("l1-10");

function ex010() {
    var n1 = Number(prompt("Digite um número"))
    resultado = n1 / 2

    alert("O metade do número é: " + resultado)
}
btn10.addEventListener("click", ex010);


// ex011
const btn11 = document.getElementById("l1-11");

function ex011() {
    var n1 = Number(prompt("Número dólar para a conversão"))
    resultado = n1 * 5.30

    alert("A conversão para real é: " + resultado)
}
btn11.addEventListener("click", ex011);


// ex012
const btn12 = document.getElementById("l1-12");

function ex012() {
    var n1 = Number(prompt("Número em reais para a conversão"))
    resultado = n1 / 5.30

    alert("A conversão para dólar é: " + resultado)
}
btn12.addEventListener("click", ex012);


// ex013
const btn13 = document.getElementById("l1-13");

function ex013() {
    var n1 = Number(prompt("Digite o primeiro número"))
    var n2 = Number(prompt("Digite o segundo número"))

    alert("Os números trocados são: " + n2 + " e " + n1)
}
btn13.addEventListener("click", ex013);


// ex014
const btn14 = document.getElementById("l1-14");

function ex014() {
    var lado = Number(prompt("Digite o lado do quadrado"))
    area = lado * lado

    alert("O lado do quadrado é: " + area)
}
btn14.addEventListener("click", ex014);


// ex015
const btn15 = document.getElementById("l1-15");

function ex015() {
    var largura = Number(prompt("Digite a largura do Retângulo"))
    var altura = Number(prompt("Digite a altura do Retângulo"))
    var area = largura * altura

    alert("A área do retângulo é: " + area)
}
btn15.addEventListener("click", ex015);


// ex016
const btn16 = document.getElementById("l1-16");

function ex016() {
    var numero = parseInt(prompt("Digite um número para ver a tabuada:"))
    var resultado = "Tabuada do " + numero + ": \n"

    for (var i = 1; i <=10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado)
    }
btn16.addEventListener("click", ex016);


// ex017
const btn17 = document.getElementById("l1-17");

function ex017() {
    var v1 = Number(prompt("Digite o primeiro valor: "));
    var v2 = Number(prompt("Digite o segundo valor: "));
    var v3 = Number(prompt("Digite o terceiro valor: "));
    var v4 = Number(prompt("Digite o quarto valor: "));
    var media = (v1 + v2 + v3 + v4) / 4


    var media = prompt("A média de é: " + media)
}
btn17.addEventListener("click", ex017);


// ex018
const btn18 = document.getElementById("l1-18");

function ex018() {
    var salario = Number(prompt("Digite o salário: "))
    var bonus = Number(prompt("Digite o bônus: "))
    var resultado = salario + bonus

    alert("O salario com bônus é de: R$" + resultado)
}
btn18.addEventListener("click", ex018);


// ex019
const btn19 = document.getElementById("l1-19");

function ex019() {
    var base = Number(prompt("Digite a basa do triângulo: "))
    var altura = Number(prompt("Digite a atura do triângulo: "))
    var area = (base * altura) / 2

    alert("A área do triângulo é de: " + area)
}
btn19.addEventListener("click", ex019);
