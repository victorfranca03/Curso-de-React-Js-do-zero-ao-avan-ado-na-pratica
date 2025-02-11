// Switch
document.write("</br> Escolha um numero de 0 a 2");
document.write("</br> 0 - Sorvete / 1 - suco<br/>");
document.write("</br> 2 - agua");
function valordex() {
    
    x = prompt("Qual produto deseja?");
    
    switch (x) {
        case "0": 
        alert("Voce pediu um sorvete");
        break;
    
        case "1": 
        alert("Voce pediu um suco");
        break;
    
        case "2": 
        alert("Voce pediu agua");
        break;

        case "3": 
        alert("Voce pediu um sorvete");
        break;
    
        default: 
        alert("Nao temos esse produto");
        break;

    }
}