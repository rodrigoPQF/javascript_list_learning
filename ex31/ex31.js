

function validaCPF(numero){
    let num = numero.split('').reduce((sum, x) => parseInt(x) + parseInt(sum))
    if (numero.length == 11 & num < 80 ){
        return ('Número Valido')
    }else{
        return ('Invalido')
    }


}
let numero = prompt('Digite um numero de CPF: ')
console.log(validaCPF(numero))