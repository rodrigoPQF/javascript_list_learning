// Exercicio 05 Lista


function calcularMaiores(idades_string){
    let idades2 = idades_string.split(',')
    let maior = 18
    let cont1 = 0
    let cont2 = 0
    for (let i = 0; i < idades2.length; i++){
        if (idades2[i] > maior){
            cont1++

        }
        else
        cont2++
    }
    return ('Maior de idade: '+ cont1+ '| Menor de idade: '+ cont2)
}


let idades = prompt('Digite varias idades separadas por virgula: ',0)
console.log(calcularMaiores(idades))
