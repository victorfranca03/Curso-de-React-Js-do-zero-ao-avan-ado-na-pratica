var nome = " ";

if (typeof localStorage.nome === "undefined") {
    localStorage.nome = prompt("Qual seu nome?");
}

nome = localStorage.nome;

document.getElementById("nome").innerHTML = "Bem Vindo " + nome;    

