/*
Compor um objeto
Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.
*/

const cliente = {
    nome: "Paulo",
    idade: 29,
    cpf: "45678912365",
    email: "Ale@gmail.com",
    fones: ["5598587458", "5598659632"],
  };

cliente.dependente = {
    nome:"Roberto",
    parentesco:"filho",
    dataNasc:"20/12/1999"
}

console.log(cliente)

cliente.dependente.nome = "Roberto Santos"

console.log(cliente)