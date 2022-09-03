let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //a negação duas vezes informa se o valor é verdadeiro ... porque a segunda negação cancela o efeito da primeira negação

//Os verdadeiros, todos os números inteiros são verdadeiros com exceção do zero

console.log('\nOs verdadeiros:\n')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // aqui temos um espa;o por isso resulta em verdadeiro
console.log(!![]) //um array vazio representa um valor verdadeiro
console.log(!!{}) //um objeto literal representa um valor verdadeiro
console.log(!!Infinity) 

console.log('\nOs falsos ...\n')
console.log(!!0)
console.log(!!'') //String vazia resulta em falso
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(!!('' || null || 0 || ' ')) // pra ser true pelo menos um tem que ser verdadeiro, que é o caso de ' '

let nome = ''
console.log(nome || '\nDesconhecido')