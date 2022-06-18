/*
Cliente poupança
Aproveitar o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupanças.
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
function clientePoupanca(nome,cpf,email,saldo,saldoPoup) {
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const ale = new clientePoupanca("ale","55256398566","ale@email.com",100,200)
console.log(ale)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
ale.depositarPoup(30)

console.log(`Saldo poup ${ale.saldoPoup}`)