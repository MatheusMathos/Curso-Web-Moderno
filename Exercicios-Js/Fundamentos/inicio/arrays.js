const valores = [7.2, 9.8, 4.5, 8.4]
console.log(valores[0], valores[3])

console.log(valores.length) // a função length serve para mostrar quantos array existe em uma constante

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // m[etodo poppy serve pra tirar um array
delete valores[0]
console.log(valores)

console.log(typeof valores)