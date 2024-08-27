// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

var prompt = require('prompt-sync')()

var lado1 = Number(prompt("Digite o 1º Lado do Triângulo: "))
var lado2 = Number(prompt("Digite o 2º Lado do Triângulo: "))
var lado3 = Number(prompt("Digite o 3º Lado do Triângulo: "))

if (lado1+lado2 > lado3 && lado1+lado3>lado2 && lado2+lado3>lado1) {
    if(lado1==lado2 && lado2==lado3){
        console.log("Triângulo equilátero")
    }else if(lado1==lado2 || lado1==lado3 || lado2==lado3){
        console.log("Triângulo isóceles")
    }else if(lado1!=lado2 && lado1!=lado3 && lado2!=lado3){
        console.log("Triângulo escaleno")
    }
}else{
    console.log("Não é um triângulo")
}