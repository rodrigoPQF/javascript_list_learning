// Exercicio 04 Lista

function calcularMaior(numeros_string){
    let numeros2 = numeros_string.split(',')
    let maior = 0
    for (let i = 0; i < numeros2.length; i++){
        if (numeros2[i] >= maior){
            maior = numeros2[i]
        }
    }
    return maior;
}

let numeros = prompt('Digite 5 numeros separado por Virgula: ',0)
console.log(calcularMaior(numeros))