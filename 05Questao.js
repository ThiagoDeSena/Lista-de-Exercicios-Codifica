// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

var prompt = require('prompt-sync')()

var peso = Number(prompt("Digite o seu peso: "))
var altura = Number(prompt("Digite o sua altura: "))

var imc = (peso)/(Math.pow(altura,2))


if(imc<18.5){
    console.log("baixo do peso")
}else if(imc<=24.9){
    console.log("peso normal")
}else if(imc<=29.9){
    console.log("sobrepeso")
}else{
    console.log("obesidade")
}