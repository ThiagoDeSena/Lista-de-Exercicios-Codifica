// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

var prompt = require('prompt-sync')()

var numero = Number(prompt("Digite um número: "))

var fatorial = 1

for (let i = numero; i >=1; i--) {
    
    fatorial *= i 
}

console.log(`Fatorial de ${numero} = ${fatorial}`)