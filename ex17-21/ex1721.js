

let vetor = ['Rock','Pagode']
//Adicionando ao Final
vetor.push('Funk')
// Dividindo array no meio se Impar e trocando o valor do meio
if (vetor.length % 2 == 0){
    console.log('Par')
}else{
    let meio = (vetor.length/2) - 0.5
    console.log(meio)
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] == vetor[meio]){
            vetor[i] = 'Axé'
        }
    }
}
console.log(vetor)

// deletando valor do inicio
vetor.shift()

// Adicionando inicio do array
vetor.unshift('Rap','Reggae')
console.log(vetor)

