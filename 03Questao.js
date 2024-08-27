// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

var prompt = require('prompt-sync')()

var nota = Number(prompt("Digite a sua nota: "))

if (nota < 6) {
    console.log("Reprovado")
}else if (nota < 7 ) {
    console.log("Recuperação")
}else if(nota <=10){
    console.log("Aprovado")
}else{
    console.log("Nota inválida")
}