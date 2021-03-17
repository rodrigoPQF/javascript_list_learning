/*Escreva um bloco de código que irá perguntar através do prompt a identificação do
visitante:
a) Se o visitante digitar “Admin” abra um prompt perguntando a senha. Se o
input for vazio ou apertar Esc exiba um alerta com “Cancelado”, se for uma
outra string exiba um alerta com a mensagem “Não conheço você”.
b) A senha deverá ser checada da seguinte maneira:
i) Se for igual a “UniBH” - exiba um alerta “Bem vindo”,
ii) Se for uma outra string - exiba um alerta “Senha incorreta!”)
*/




let indent = prompt('Digite o id: ')
autenticaId(indent)


function autenticaId(ident){
    if (indent == '' || indent == null){
        alert('Cancelado')

    }else if (ident != 'Admin'){
        alert('Não te conheco')
    }
    else{
        let senha = prompt('Digite a senha')
        return autenticaSenha(senha)
    }
}

function autenticaSenha(senha){
    if (senha == 'UniBH'){
        alert('Bem Vindo')
    }else if(senha == null || senha == ''){
        alert('Cancelado')

    }else{
        alert('Senha incorreta!')
    }
    
}

