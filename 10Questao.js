// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

var prompt = require('prompt-sync')()

var numero = parseInt(prompt("Digite um número: "))

for (let i = 0; i < 10; i++) {
    console.log(`${i+1}º: `+numero)
}


