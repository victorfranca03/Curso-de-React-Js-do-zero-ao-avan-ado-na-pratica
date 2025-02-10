function atualizarInformacoes() {
    var nome = "Victor";
    var idade = prompt("Qual a sua idade?");
    var altura = 1.90;

    console.log(nome);
    console.log(altura);

    // Esse são minhas informações básicas

    var nomeIdadeElement = document.getElementById("nomeIdade");
    nomeIdadeElement.innerText = "Nome: " + nome + ", Idade: " + idade;
}