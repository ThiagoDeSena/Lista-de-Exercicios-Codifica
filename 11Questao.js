// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

var prompt = require('prompt-sync')()

let numeros = []
let soma =0

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt(`Digite um ${i+1} número: `))
    soma += numeros[i]
}

console.log(`Soma dos números Digitados: ${soma}`)