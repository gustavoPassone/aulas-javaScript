// ex001
const btn1 = document.getElementById("l2-01");

function ex001() {
    var numero = Number(prompt("Digite um valor para formatação"));

    alert(numero.toLocaleString('pt-BR', {style: 'currency', currency: "BRL"}));
}
btn1.addEventListener("click", ex001);


// ex002
const btn2 = document.getElementById("l2-02");

function ex002() {
    var texto = prompt("Digite uma frase");

    alert(texto.toUpperCase());
}
btn2.addEventListener("click", ex002);


// ex003
const btn3 = document.getElementById("l2-03");

function ex003() {
    var texto = prompt("Digite um texto");

    alert(texto.toLowerCase());
}
btn3.addEventListener("click", ex003);


// ex004
const btn4 = document.getElementById("l2-04");

function ex004() {
    var nome = prompt("Digite seu primeiro nome");

    alert(`${nome} contem ${nome.length} letras.`);
}
btn4.addEventListener("click", ex004);


// ex005
const btn5 = document.getElementById("l2-05");

function ex005() {
    var numero = 10 / 3;

    alert(numero.toFixed(2));
}
btn5.addEventListener("click", ex005);


// ex006
const btn6 = document.getElementById("l2-06");

function ex006() {
    var nome = prompt("Escreva seu primeiro nome");

    alert(`${nome.toUpperCase()} contem ${nome.length} letras`)
}
btn6.addEventListener("click", ex006);


// ex007
const btn7 = document.getElementById("l2-07");

function ex007() {
    var v1 = Number(prompt("Digite o primeiro valor"));
    var v2 = Number(prompt("Digite o segundo valor"));
    var v3 = Number(prompt("Digite o terceiro valor"));
    var media = (v1 + v2 + v3) / 3;

    alert(`A média dos valores é ${media.toLocaleString('pt-BR', {style: 'currency', currency: "BRL"})}`);
}
btn7.addEventListener("click", ex007);