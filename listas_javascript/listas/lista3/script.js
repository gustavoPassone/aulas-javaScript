// ex001
const btn1 = document.getElementById("l3-01");
function ex001() {
    var idade = Number(prompt("Digite sua idade"));
    var textoConsole = "";

    textoConsole = 
        idade <= 16
        ? "Pode entrar"
        : "Não pode entrar"
    alert(textoConsole)
}
btn1.addEventListener("click", ex001);

// ex002
const btn2 = document.getElementById("l3-02");
function ex002() {
    var idade = Number(prompt("Digite sua idade"));

    var permissao = 
        idade >= 18 ? "Você é maior de idade" : "Você é menor de idade"
        
    alert(permissao);
}
btn2.addEventListener("click", ex002);

// ex003
const btn3 = document.getElementById("l3-03");
function ex003() {
    var n1 = Number(prompt("Digite o primeiro número"));
    var n2 = Number(prompt("Digite o segundo número"));
    var textoConsole = "";

    textoConsole = 
        n1 == n2 ? "Os números são iguais" : "Os números são diferentes"

    alert(textoConsole);

    /* if (n1 == n1) {
        alert("Os números são iguais");
    } else {
        alert("Os números são diferentes");
    } */
}
btn3.addEventListener("click", ex003);

// ex004
const btn4 = document.getElementById("l3-04");
function ex004() {
    var i1 = Number(prompt("Digite a primeira idade para comparação"));
    var i2 = Number(prompt("Digite a segunda idade"));

    /* textoConsole =
        i1 >= i2
        ? `${i1} é mais velho que ${i2}`
        : `${i2} é mais velho que ${i1}`
    alert(textoConsole) */

    if (i1 > i2) {
        alert(`${i1} é mais velho que ${i2}`)
    } else if (i1 < i2) {
        alert(`${i2} é mais velho que ${i1}`)
    } else {
        alert("Vocês tem a mesma idade")
    }
}
btn4.addEventListener("click", ex004);

// ex005
const btn5 = document.getElementById("l3-05");
function ex005() {
    var idade = Number(prompt("Digite a sua idade"));

    if (idade >= 18) {
        alert("Pode tirar habilitação");
    } else {
        alert("Não pode tirar habilitação")
    }
    }
btn5.addEventListener("click", ex005);

// ex006
const btn6 = document.getElementById("l3-06");
function ex006() {
    var altura = Number(prompt("Digite a sua altura. Exemplo: 1.80"));
    var peso = Number(prompt("Digite o seu peso. Exemplo: 60.10"));
    var imc = peso / (altura * altura)

    if (imc < 18.5) {
        alert(`Seu IMC: ${imc.toFixed(2)} 
    Você está abaixo do peso`)
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert(`Seu IMC: ${imc.toFixed(2)} 
    Você está com peso normal`)
    } else if (imc >= 25 && imc >= 29.9) {
        alert(`Seu IMC: ${imc.toFixed(2)} 
    Você está com sobrepeso`)
    } else {
        alert(`Seu IMC: ${imc.toFixed(2)} 
        Você está com obesidade`)
    }
}
btn6.addEventListener("click", ex006);

// ex007
const btn7 = document.getElementById("l3-07");
function ex007() {
    var numero = Number(prompt("Digite um número"));

    if (numero >= 1) {
        alert(`O número ${numero} é Positivo.`);
    } else if (numero == 0) {
        alert(`O número ${numero} é Zero.`);
    } else {
        alert(`O número ${numero} é negativo.`);
    }
}
btn7.addEventListener("click", ex007);

// ex008
const btn8 = document.getElementById("l3-08");
function ex008() {
    var nota = Number(prompt("Digite a sua nota"));

    if (nota >= 60) {
        alert(`Você foi aprovado com nota ${nota}!!`);
    } else {
        alert(`Você foi reprovado com nota ${nota} :(`);
    }
}
btn8.addEventListener("click", ex008);

// ex009
const btn9 = document.getElementById("l3-09");
function ex009() {
    var hora = Number(prompt("Digite a hora atual"));

    if (hora >= 0 && hora <= 4) {
        alert(`Agora está de madrugrada`)
    } else if (hora >= 5 && hora <= 11) {
        alert(`Agora está de manhã`)
    } else if (hora >= 12 && hora <= 17) {
        alert("Agora está de tarde")
    } else if (hora >= 18 && hora <=23) {
        alert("Agora está de noite")
    } else {
        alert("Digite um número entre 0 e 23.")
    }
}
btn9.addEventListener("click", ex009);

// ex010
const btn10 = document.getElementById("l3-10");
function ex010() {
    var numero = Number(prompt("Digite um número para saber se é Par ou Ímpar"));
    var calculo = numero % 2;

    if (calculo == 0) {
        alert(`O número ${numero} é Par.`);
    } else {
        alert(`O número ${numero} é Ímpar.`);
    }
}
btn10.addEventListener("click", ex010);

// ex011
const btn11 = document.getElementById("l3-11");
function ex011() {
    var valorCompra = Number(prompt("Digite o valor da compra: "));
    var codigoDesconto = prompt("Digite o cupom de desconto: ");

    if (codigoDesconto.toUpperCase() == "DESC10") {
        var desconto = valorCompra * 0.10;
        var valorDesconto = valorCompra - desconto

        alert(`Compra no valor de ${valorCompra.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})} recebeu um desconto de 10%.
    Novo valor: ${valorDesconto.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})}`)
    } else {
        alert(`Cupom ${codigoDesconto} invalido.
    Valor da compra: ${valorCompra.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})}`);
    }
}
btn11.addEventListener("click", ex011);

// ex012
const btn12 = document.getElementById("l3-12");
function ex012() {
    var linguagem = prompt("Escreva a linguagem");

    if (linguagem.toUpperCase() == "JAVASCRIPT") {
        alert("Você escolheu a linguagem correta!");
    } else {
        alert("Escolha outra linguagem.");
    }
}
btn12.addEventListener("click", ex012);

// ex013
const btn13 = document.getElementById("l3-13");
function ex013() {
    var nome = prompt("Digite um nome");

    if (nome.length > 5) {
        alert("Nome longo");
    } else {
        alert("Nome curto");
    }
}
btn13.addEventListener("click", ex013);

// ex014
const btn14 = document.getElementById("l3-14");
function ex014() {
    var graus = Number(prompt("Digite a temperatura em graus Celsius"));

    if (graus < 15) {
        alert("Frio");
    } else if (graus >= 15 && graus < 25) {
        alert("Agradável");
    } else {
        alert("Quente");
    }
}
btn14.addEventListener("click", ex014);

// ex015
const btn15 = document.getElementById("l3-15");
function ex015() {
    var nota = Number(prompt("Escreva sua nota"));

    if (nota > 10) {
        alert("Escreva um número de 0 a 10")
    } else if(nota >= 9) {
        alert("Excelente")
    } else if (nota <= 8 && nota >= 7) {
        alert("Bom")
    } else if (nota <= 6 && nota >= 5) {
        alert("Regular")
    } else {
        alert("Insuficiente")
    }
}
btn15.addEventListener("click", ex015);

// ex016
const btn16 = document.getElementById("l3-16");
function ex016() {
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
}
btn16.addEventListener("click", ex016);

// ex017
const btn17 = document.getElementById("l3-17");
function ex017() {
    var temperatura = prompt("Digite a temperatura");
    var unidade = prompt('Digite o formato da temperatura. "C" para Celsius e "F" para Fahrenheit');
    var celsius = (temperatura - 32) / 1.8;
    var fahrenheit = (temperatura * 1.8) + 32;

    if (unidade.toUpperCase() == "C") {
        alert(`${fahrenheit.toFixed(2)} °F`);
    } else if (unidade.toUpperCase() == "F") {
        alert(`${celsius.toFixed(2)} °C`);
    } else {
        alert('Erro: Digite "C" para Celsius e "F" para Fahrenheit.');
    }
}
btn17.addEventListener("click", ex017);

// ex018
const btn18 = document.getElementById("l3-18");
function ex018() {
    var letra = prompt("Digite uma letra");

    if (letra == letra.toUpperCase()) {
        alert("Letra Maiúscula")
    } else {
        alert("Letra Minúscula")
    }
}
btn18.addEventListener("click", ex018);

// ex019
const btn19 = document.getElementById("l3-19");
function ex019() {
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
}
btn19.addEventListener("click", ex019);

// ex020
const btn20 = document.getElementById("l3-20");
function ex020() {
    var preco = Number(prompt("Digite a valor de um produto"));

    if (preco < 20) {
        alert("Barato");
    } else if (preco >= 20 && preco < 100) {
        alert("Médio");
    } else {
        alert("Caro");
    }
}
btn20.addEventListener("click", ex020);
