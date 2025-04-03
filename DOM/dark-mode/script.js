const btn = document.querySelector('#btn')

function darkMode() {
    const body = document.querySelector("body")
    body.classList.toggle("dark-mode")
    
    if (btn.innerHTML == "Ativar") {
        btn.innerHTML = "Desativar"
        return;
    } 
    btn.innerHTML = "Ativar"
    
}

btn.addEventListener('click', darkMode)
