/*
Cliente genérico
Gerar uma função que permita a criação de novos clientes a partir de um modelo.
*/

function cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cfp = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const ale = new cliente("alexandre","45698712356","ale@gmail.com",100)

console.log(ale)