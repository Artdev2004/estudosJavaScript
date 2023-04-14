function converteCelsius(){
    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "))

    document.getElementById("resultado").innerHTML =  fahrenheit + "°F é equivalente a " + (fahrenheit - 32) * (5/9) + "°C"
}