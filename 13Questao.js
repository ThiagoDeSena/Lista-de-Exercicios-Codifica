// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

var prompt = require('prompt-sync')()

console.log("Digite números para tirar a média da soma deles:")

var soma=0,i=0,media=0,numero

do{
    numero = Number(prompt("Digite um número(0-Sair): "))
    soma+=numero
    if(numero!=0){
        i++
    } 
   
}while(numero!=0)

media=soma/i
console.log(`Média dos números digitados: ${media}`)
