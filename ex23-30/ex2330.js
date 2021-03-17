// Exercicio 23 á 30 Lista


// Declarando objeto
let meupinguim = {
    criador: 'Bill Finger',
    Nome: 'Oswald Chesterfield Cobblepot',
    Sexo: 'Masculino',
    TerraNatal: 'Gotham City',
    Especie: 'Humano',
    Ocupacao: 'Empresário Mafioso/Criminoso Profissional'
}

// Imprimindo chave do objeto
console.log(`Olá, sou um pinguim e meu nome é ${meupinguim.Nome} !`)

// Atribuindo chave no objeto
meupinguim.podevoar = false


// Definicao de metodo dentro do objeto
meupinguim.emitirsom = function(){ 
    console.log("CHIRP CHIRP! É assim que os pinguins se parecem?") 
}

// Criando um objeto e chamando o metodo 
let pinguim = Object.create(meupinguim)
pinguim.emitirsom()

// Atribuindo outro metodo com uma funcão
meupinguim.fly = function(){
    if(this.podevoar == true){
        console.log('Eu posso voar')

    }else{
        console.log('Não posso voar !!!')
    }
}
// imprimindo o metodo
pinguim.fly()
console.log(meupinguim)

// For in para mostrar as propriedades do objeto

for (let prop in meupinguim){
    console.log("Propriedade: "+ prop)
}
// For in para mostrar as propriedades e os conteudos dos objetos 
for (let prop in meupinguim){
    console.log("Propriedade: "+ prop + "Objeto: " + meupinguim[prop])
}