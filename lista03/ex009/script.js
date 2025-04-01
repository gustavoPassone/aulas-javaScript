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