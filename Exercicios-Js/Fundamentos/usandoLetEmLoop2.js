const fucs = []

for (let i = 0; i < 10; i++){
    fucs.push(function(){
        console.log(i)
    })
}

fucs[2] ()
fucs[8] ()

/**Pelo fato de ter declarado a variável com Let a função tem escopo de bloco e retornará o valor do índice */