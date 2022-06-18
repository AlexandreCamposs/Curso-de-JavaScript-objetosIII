/*
Lista de dependentes
Verificar a melhor forma de agregar a informação de um novo dependnete ao objeto cliente.
*/

const cliente = {
    nome: "Paulo",
    idade: 29,
    cpf: "45678912365",
    email: "Ale@gmail.com",
    fones: ["5598587458", "5598659632"],
    dependentes: [{
        nome:"Roberto",
        parentesco:"filho",
        dataNasc:"20/12/1999"
    }]
  };
console.log(cliente)

cliente.dependentes.push({
    nome:"Fabio",
    parantesco:"filho",
    dataNasc:"12/05/1993"
})

//console.log(cliente)

const filhoMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === "12/05/1993")
console.log(filhoMaisNovo)
console.log(filhoMaisNovo[0].nome)