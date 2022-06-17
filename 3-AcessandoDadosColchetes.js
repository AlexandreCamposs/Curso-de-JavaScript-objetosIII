/*
Acessar chaves
Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela.
*/

const cliente = {
    nome:"Alexandre",
    idade:29,
    cpf:"45678912365",
    email:"Ale@gmail.com"
}
                //0      //1
const chaves = ["nome","idade","cpf","email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["nome"])