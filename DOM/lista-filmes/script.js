var content = document.querySelector(".content")
var filmes = ["Vingadores", "Avatar", "Toy Story", "Star Wars", "Piratas do Caribe"];

for(var i = 0; i < filmes.length; i++) {
    var p = document.createElement("p")
    p.innerHTML = filmes[i]
    content.appendChild(p)

    // content.innerHTML += `<p>${filmes[i]}</p>`
}