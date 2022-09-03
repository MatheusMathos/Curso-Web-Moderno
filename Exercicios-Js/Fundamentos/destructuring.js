// Novo recurso do ES2015

/** Destructing é uma forma de tirar vários atributos dentro
de um objeto. **/
//é uma expressão em JavaScript que possibilita extrair dados
// de arrays ou objetos em variárveis distintas...Mozila

const pessoa = {
    nome: 'Matheus',
    idade: 28,
    endereco: {
        logradouro: 'Rua Amazonas',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)