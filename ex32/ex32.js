// Exercicio 32 Lista

function calcularIdadeDoCachorro(idade){
    function etaria(idade){
        if (idade < 14){
            return  'Criança'
        }else if( idade >= 14 & idade < 28){
            return 'Adolescente'
        }else{
            return 'Adulto'
        }
    }
    let idadereal = 0
    idadereal = idade * 7
    return 'Idade como Humano: '+ idadereal +'| Catégoria etária dele: '+ etaria(idadereal);

}
let idade = 1
console.log(calcularIdadeDoCachorro(idade))
