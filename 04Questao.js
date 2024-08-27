// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

var prompt = require('prompt-sync')()

var menu = "Escolha uma das 3 opções:\n"+
            "1 - Refrigerante\n"+
            "2 - Cerveja\n"+
            "3 - Suco"

console.log(menu)

var opcao = Number(prompt("Digite o Número da opção: "))

switch(opcao){
    case 1:
        console.log("Refrigerante São Geraldo(Cajuína)")
        break
    case 2:
        console.log("Cerveja Heineken")
        break
    case 3:
        console.log("Suco de acelora")
        break
    default:
        console.log("Valor inválido")
        break
}