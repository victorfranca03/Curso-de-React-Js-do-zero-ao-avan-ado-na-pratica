// Função de entar 

function entrar() {
    var area = document.getElementById("area");
    var texto = prompt("Qual seu nome?");

    if (texto == "" || texto == null) {
        alert("Por favor, digite seu nome");
        area.innerHTML = "Bem Vindo";
    }
    else {
        area.innerHTML = "Bem Vindo " + texto;
    }

}

function entrar2(nome) {
    var area = document.getElementById("area");
    var texto = prompt("Qual seu sobre nome??");
    area.innerHTML = "Bem Vindo " + nome + " " + texto;

}