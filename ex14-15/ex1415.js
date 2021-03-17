

function ifNormal(produto){
    if (produto >= 100 & produto <= 200){
        return ('Valor entra 100 e 200')
    
    }else{
        return ('Não incluido')
    }
}

function ifNot(produto){
    if (!(produto >= 100 & produto <= 200) == false ){
    return ('Valor esta incluido 100 a 200')
    }else{
        return ('Não incluido')
    }

}

let produto = prompt('Digite o valor do produto: ', 0)

console.log(ifNormal(produto))
console.log(ifNot(produto))



