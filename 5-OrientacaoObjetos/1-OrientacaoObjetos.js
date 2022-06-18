class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cfp = cpf;
    this.saldo - saldo;
  }

    // métodos é uma função que executa o contexto de um objeto
  depositar(valor) {
    this.saldo += valor;
  }
  exibirSaldo() {
    console.log(this.saldo);
  }
}

const ale = new Cliente("ale", "ale@gmail.com", "4569874563", 100);
ale.exibirSaldo();
console.log(ale);
