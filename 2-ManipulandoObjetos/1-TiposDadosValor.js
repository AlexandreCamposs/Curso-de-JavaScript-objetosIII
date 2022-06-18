/*
Lista de telefones 
Acessar a lista de números e telefone das pessoas cadastradas no sistema e imprimi-la, verificanddo se há mais de um número em algum cadastro.
*/

const cliente = {
  nome: "Alexandre",
  idade: 29,
  cpf: "45678912365",
  email: "Ale@gmail.com",
  fones: ["5598587458", "5598659632"],
};
cliente.fones.forEach(fone => console.log(fone))