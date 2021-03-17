
function inverterNomes(nomes){
    let nomes2 = nomes.split(',')
    nomes2.reverse();
    return nomes2

}

let nomes = prompt('Digite varios nomes por virgula')
console.log(inverterNomes(nomes))

