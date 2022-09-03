const funcs = []
/**O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. */
for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() //índice 2
funcs[8]() // índice 8

//Independente do índice invocado sempre retornará 10
//Porque a variável não tem escopo de bloco
//É um problema histórico do JavaScript
//Com o Let o comportamento é diferente

