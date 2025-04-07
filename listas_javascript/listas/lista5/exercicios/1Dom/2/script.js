var btn = document.getElementById("btn")

function novoItem() {
    var ul = document.getElementById("ul")
    var li = document.createElement("li")
    
    li.appendChild(document.createTextNode("Four"));

    /* var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Four"));
    li.setAttribute("id", "element4"); // added line
    ul.appendChild(li);
    alert(li.id); */
}

btn.addEventListener("click", novoItem)