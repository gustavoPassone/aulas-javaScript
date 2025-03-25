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