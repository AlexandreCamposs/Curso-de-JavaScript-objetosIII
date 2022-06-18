/*
Fazendo depósitos
Adicionar uma propriedade que permita ações, para que os clientes que estão cadastrados consigam fazer operações bancárias.
*/

const cliente = {
  nome: "Paulo",
  idade: 29,
  cpf: "45678912365",
  email: "Ale@gmail.com",
  fones: ["5598587458", "5598659632"],
  dependentes: [
    {
      nome: "Roberto",
      parentesco: "filho",
      dataNasc: "20/12/1999",
    },
    {
      nome: "Fabio",
      parantesco: "filho",
      dataNasc: "12/05/1993",
    },
  ],
  saldo:100,
  depositar:function(valor) {
    this.saldo += valor
  }
}; 
console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
