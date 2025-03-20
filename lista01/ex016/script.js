/* var numero = Number(prompt("Digite um número para ver a tabuada"))

var n1 = numero * 1
var n2 = numero * 2
var n3 = numero * 3
var n4 = numero * 4
var n5 = numero * 5
var n6 = numero * 6
var n7 = numero * 7
var n8 = numero * 8
var n9 = numero * 9
var n10 = numero * 10

alert("A tabuada de " + numero + " é: " + n1 + " | " + n2 + " | " + n3 + " | " + n4 + " | " + n5 + " | " + n6 + " | " +  n7 + " | " + n8 + " | " + n9 + " | " + n10)
 */

var numero = parseInt(prompt("Digite um número para ver a tabuada:"))
var resultado = "Tabuada do " + numero + ": \n"

for (var i = 1; i <=10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
}
alert(resultado)