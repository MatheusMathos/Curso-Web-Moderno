const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` //aceita quebra de linhas o templete usamos a interpolação

console.log(concatenacao, template)

console.log(`1 + 1 = ${1+1}`) //interpreta o que está dentro das chaves, pode fazer funções, calculos, etc..dentro da Chaves e junta da String

const up = texto => texto.toUpperCase()
console.log(`Ei ... ${up('mantenha-se focado!!!')}`)