let inputCpf = document.querySelector("#cpf");
inputCpf.addEventListener('keypress', ()=>{
    let tamanhoCpf = inputCpf.value.length;

    if(tamanhoCpf == 3 || tamanhoCpf == 7) {
        inputCpf.value += "."
    } else if (tamanhoCpf == 11) {
        inputCpf.value += "-"
    }
})

let cnpj = document.querySelector("#cnpj")
cnpj.addEventListener('keypress', ()=>{
    let tamanhoCnpj = cnpj.value.length;

    if (tamanhoCnpj == 2 || tamanhoCnpj == 6) {
        cnpj.value += "."
    } else if (tamanhoCnpj == 10) {
        cnpj.value += "/"
    } else if (tamanhoCnpj == 15) {
        cnpj.value += "-"
    }
})

let rg = document.querySelector("#rg")
rg.addEventListener('keypress', ()=>{
    rgTamanho = rg.value.length

    if (rgTamanho == 2 || rgTamanho == 6) {
        rg.value += "."
    } else if (rgTamanho == 10) {
        rg.value += "-"
    }
})

let tel = document.querySelector("#tel")
tel.addEventListener('keypress', ()=>{
    telTamanho = tel.value.length

    if (telTamanho == 0) {
        tel.value += "("
    } else if (telTamanho == 3) {
        tel.value += ") "
    } else if (telTamanho == 10) {
        tel.value += "-"
    }
})