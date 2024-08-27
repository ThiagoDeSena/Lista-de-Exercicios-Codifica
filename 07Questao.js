// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

var prompt = require('prompt-sync')()

var numeroMacas = Number(prompt("Digite o nº de maças compradas: "))

var precoMacas=0

if (numeroMacas <12 ) {
    precoMacas= numeroMacas*0.3
    console.log(`Preço total da compra das ${numeroMacas} maças: R$ ${precoMacas.toFixed(2)}`)
}else{
    precoMacas= numeroMacas*0.25
    console.log(`Preço total da compra das ${numeroMacas} maças: R$ ${precoMacas.toFixed(2)}`)
}