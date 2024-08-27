// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

var prompt = require('prompt-sync')()

var idade = Number(prompt("Digite a sua idade: "))

if (idade>0 && idade<=12) {
    console.log("Criança")
}else if (idade<20) {
    console.log("Adolescente")
}else if (idade<60) {
    console.log("Adulto")
}else if (idade>=60) {
    console.log("Idoso")
}else{
    console.log("Valor inválido")
}