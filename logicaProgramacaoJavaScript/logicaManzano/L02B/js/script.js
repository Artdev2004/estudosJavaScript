window.onload = function main(){
    var input = prompt("DIGITE UM VALOR POSITIVO OU NEGATIVO: ")

    input = parseInt(input);

    if (input < 0){
        input = input * -1
    }
    alert("Seu número: " + input)
}