const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//Somente para fins didáticos, essas linhas abaixos não utilize no dia-a-dia kk

//Esse externo é um rótulo ... para o break pegar o for de fora mais externo
externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}