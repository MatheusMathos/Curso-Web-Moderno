const fabricantes = ["Mercedes", "Audi", "BWM"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

/*CallBack é quando você passa uma função e essa função será chamada
quando um evento acontecer

Um exemplo: Uma chamada Ajax. Vai no servidor e passa uma callback
quando uma resposta chegar, seja de sucesos ou de erro.*/ 