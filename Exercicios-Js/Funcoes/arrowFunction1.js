let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //função reduzida, utilizada quando se tem função de uma única linha // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá!'
}

ola = () => 'Olá!'
ola = _ => 'Olá' // possui um parâmetro que é o underline

console.log(ola())