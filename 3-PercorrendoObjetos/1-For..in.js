/*
Puxando relatório
Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fprnecer a outros departamentos do banco.
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
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

let relatorio = "";

for (let info in cliente) {
  if (
    typeof cliente[info] === "object" ||
    typeof cliente[info] === "function"
  ) {
    continue
  }else {
    relatorio += `
    ${info} ==> ${cliente[info]}
    `
  }
}
console.log(relatorio)
