/*
Cliente poupança
Aproveitar o cliente que já existe e crair a partir dele um novo tipo de cliente para contas poupança.
*/
class Cliente {
    constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }
  exibirSaldo() {
    console.log(this.saldo);
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo); //super passa qual as propriedades que quer que herdar
    this.saldoPoupanca = saldoPoupanca;
  }
  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
}

const ale = new ClientePoupanca(
  "ale",
  "ale@gmail.com",
  "45698745625",
  100,
  200
);
console.log(ale);

// ale.depositar(50)
// ale.depositarPoupanca(150)
// console.log(ale)
