var lista = [];
var item = document.getElementById("item");
var btn = document.querySelector(".btn");
var res = document.querySelector(".res");
var erro = document.getElementById("erro");

function addItem() {
    var valueItem = item.value

    lista.push(valueItem);
    res.innerHTML += `<p>${valueItem}</p>`;        

    item.value = "";
}

btn.addEventListener("click", addItem)