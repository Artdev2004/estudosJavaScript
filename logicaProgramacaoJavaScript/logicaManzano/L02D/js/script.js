window.onload = function main(){

    let nota1 = parseFloat(prompt("Digite a nota 1:"));
    let nota2 = parseFloat(prompt("Digite a nota 2:"));
    let nota3 = parseFloat(prompt("Digite a nota 3:"));
    let nota4 = parseFloat(prompt("Digite a nota 4:"));

    // Calcular a média das notas
    let soma = nota1 + nota2 + nota3 + nota4;
    let media = soma / 4;

    if (media >= 7) {
        console.log("Aluno aprovado! Média: " + media);
    } else {
        let notaExame = parseFloat(prompt("Digite a nota do exame:"));
        let novaMedia = (media + notaExame) / 2;
        
        if (novaMedia >= 5) {
            console.log("Aluno aprovado em exame! Média final: " + novaMedia);
        } else {
            console.log("Aluno não aprovado. Média final: " + novaMedia);
        }
    }
}