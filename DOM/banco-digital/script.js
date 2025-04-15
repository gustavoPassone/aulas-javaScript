let user = prompt("Digite seu Usuario");
let password = Number(prompt("Digite sua senha"));

let userADM = "admin";
let passwordADM = 123456;

if (user == userADM && password == passwordADM) {
    alert("Logado com sucesso")
    function menu() {
        let opcoes = Number(prompt(`O que deseja fazer:
    [1] Ver saldo
    [2] Realizar Saque
    [3] Realizar Depósito
    [4] Transferência para outro usuário
    [5] Ver dados da conta
    [6] Alterar senha
    [7] Sair.
    `)) 
    return opcoes;
}
} else {
    alert("Erro")
}

menu();