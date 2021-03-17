// Exercicio 03
function calcularQuadrado(numeros_string){
    let numeros2 = numeros_string.split(',')
    let quadNumero = 0;
    let newArray = []
    for (let i = 0; i < numeros2.length; i++){
    console.log(numeros2[i])
    quadNumero = numeros2[i] ** 2
    newArray.push(quadNumero)
    }
    return newArray;
}
let numeros = prompt('Digite 5 numeros: ',0);
console.log(calcularQuadrado(numeros))