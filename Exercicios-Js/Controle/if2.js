function teste1(num) {
    if(num > 7)
    console.log(num)
    console.log('Final')
}

//teste1(6)
//teste1(8)

function teste2(num){
    if(num > 7)
    
    ; //essa é a sentença (vazia) que está associada ao If, por isso imprimiu 6 e 8
    // não usar ; nas estruturas de controle (Cuidado!)
    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)