// Exercicio 22 Lista


function somarValores(arrayNumeros){
    let soma = 0
    for (let y=0; y < arrayNumeros.length; y++){
        soma = soma + Number(arrayNumeros[y])

    }
    return soma

}
let l = 999999999
let arrayNumeros = []

for (let i = 0; i < l; i++){
    let valor = prompt('Digite um valor: ')
    if (valor == '' || valor == null || isNaN(valor)){
        i = 999999999
        console.log(somarValores(arrayNumeros))
    }else{
        arrayNumeros.push(valor)
        console.log(arrayNumeros)
    }
}





