/*
Lista de dependnetes
Extrair de uma lista de clientes apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco.
*/

const clientes = [
  {
    nome: "Paulo",
    cpf: "45678912365",
    dependentes: [
      {
        nome: "Roberto",
        parentesco: "filho",
        dataNasc: "20/12/1999",
      },
      {
        nome: "Ricardo",
        parentesco: "filho",
        dataNasc: "20/12/1999",
      },
    ],
  },
  {
    nome: "Fabio",
    cpf: "45678912365",
    dependentes: [
      {
        nome: "Alex",
        parentesco: "filho",
        dataNasc: "20/12/1999",
      },
      {
        nome: "Alexsandro",
        parentesco: "filho",
        dataNasc: "20/12/1999",
      },
    ],
  },
];

const listaDependnetes = [...clientes[0].dependentes,...clientes[1].dependentes]
// console.log(listaDependnetes)
console.table(listaDependnetes)