// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Faaala' // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Matheus',
    idade: 28,
    endereco: {
        logradouro: 'Rua X',
        numero: 789
    }


}

console.log(saudacao)
console.log(exec())
console.log(cliente)