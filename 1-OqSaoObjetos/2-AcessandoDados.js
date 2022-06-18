//Printar infos
//Acessar um objeto com informações de um cliente e exibir essas informações no console.

const cliente = {
    nome:"Alexandre",
    idade:29,
    cpf:"45678912365",
    email:"Ale@gmail.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

console.log(cliente.cpf.substring(0,3))