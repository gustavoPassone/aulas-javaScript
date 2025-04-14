var frutas = ["banana", "laranja"]

// .push() Adiciona no final
frutas.push("Maça")

// .unshift() Adiciona no começo
frutas.unshift("Melancia")

console.log(frutas)

/* // .pop() Remove o ultimo
frutas.pop()

// .shift() Remove o primeiro
frutas.shift() */

// .splice(2[indice],1[numero de itens que sera excluido depois do indice]) Remove pelo indice
// frutas.splice(2,1)

// Mostra o indice
// console.log(frutas.indexOf("Melancia"))

const user = prompt("Qual fruta deseja deletar")
const deleteFruta = frutas.indexOf(user)
frutas.splice(deleteFruta, 1)

console.log(frutas)

// Retorna se tem ou não na lista
console.log(frutas.includes("Melancia"))