// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

var prompt = require('prompt-sync')()

var numero = Number(prompt("Digite um número: "))

console.log("Tabuada de multiplicação:")
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${numero} = ${i*numero}`)
}
