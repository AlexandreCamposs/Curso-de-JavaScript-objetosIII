/*
Oferta de seguro
Percorrer um objeto, verificar se existe a chave dependnetes e, caso exista, enviar uma mensagem de oferta de seguro.
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

function oferecerSeguro(obj) {
  const propsCliente = Object.keys(obj);
  if (propsCliente.includes("dependentes")) 
  {
    console.log(`Oferta de seguro para ${obj.nome}`);
  }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)