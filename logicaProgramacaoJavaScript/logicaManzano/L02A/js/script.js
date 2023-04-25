function pegarDiferenca(){
    let n1 = parseFloat(prompt("Digite o primeiro número: "))
    let n2 = parseFloat(prompt("Digite o segundo número: "))

    document.getElementById("mensagem").innerHTML = "Olha o console hehe"

    // usando ternário
    n1 == n2 ? console.log("O número " + n1 + " é igual a " + n2 +". Diferença: " + (n1 - n2)) 
            : n1 > n2 ?  console.log("O número " + n1 + " é maior que " + n2 +". Diferença: " + (n1 - n2)) 
            : console.log("O número " + n2 + " é maior que " + n1 +". Diferença: " + (n2 - n1))
            
    
}