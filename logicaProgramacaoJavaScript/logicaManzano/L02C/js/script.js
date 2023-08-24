window.onload = function main(){
 
    var soma = 0.0, media = 0.0;

    for(var i = 1; i <= 4; i++){

       var nota =  parseFloat(prompt("Digite a "+ i +"° nota: "));
       soma += nota
    }
    media = soma / 4;

    if(media < 5){
        alert("REPROVADO: " + media)

    }else (
        alert("APROVADO: " + media)
    )
    
}