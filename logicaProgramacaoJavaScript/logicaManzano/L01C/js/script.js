function calcularVolume(){

    let raio = parseFloat(prompt("Digite o raio da circunferência: "))
    let altura = parseFloat(prompt("Digite a altura da lata de óleo: "))

    document.getElementById("resultado").innerHTML = "O volume da lata de óleo é: " + (Math.PI * Math.pow(raio,2) * altura).toFixed(1) + " Litros"
}

