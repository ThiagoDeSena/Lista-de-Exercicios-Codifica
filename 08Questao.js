// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

var prompt = require('prompt-sync')()

let listaDeNumeros = []

var variavel1 = Number(prompt("Digite um número: "))

var variavel2 = Number(prompt("Digite outro número: "))

if (variavel1!=variavel2) {
    listaDeNumeros.push(variavel1,variavel2)

    listaDeNumeros.sort((a,b) => a-b)

    console.log(`Números em ordem:`)
    console.log(listaDeNumeros)
}else{
    console.log("Números digitados são iguais. Por favor, digite valores diferentes")
}



