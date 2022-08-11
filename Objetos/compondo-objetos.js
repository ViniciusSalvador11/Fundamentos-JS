const cliente = {
    nome: 'Vinicius',
    idade: 20,
    cpf: '123456789',
    email: 'vinicius@email.com',
    fones: ["5255485425", "8545824865"]      
}
// criando um objeto dentro de outro objeto

cliente.depedentes = { 
    nome: "Vera",
    parentesco: "mãe",
    dataDeNascimento: "05/08/1973"
}
console.log(cliente)

cliente.depedentes.nome = "Veraluce" /// alterar um valor de um objeto dentro de outro objeto
console.log(cliente)