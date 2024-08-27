// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

var prompt = require('prompt-sync')()

var fibonacci = []

for (let i = 0; i < 10; i++) {
    if (i==0) {

        fibonacci[i]=0
    }else if(i==1){
        fibonacci[i]=1
    }else{
        fibonacci[i]= fibonacci[i-1] + fibonacci[i-2]
    }
    
}

console.log("Sequência de Fibonacci:")
console.log(fibonacci)
