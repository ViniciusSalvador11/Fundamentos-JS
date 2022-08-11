const cliente = {
    nome: 'Vinicius',
    idade: 20,
    cpf: '123456789',
    email: 'vinicius@email.com'
}

console.log(`O nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos`)

console.log(`Os três primeiros números do cpf são ${cliente.cpf.substring(0, 3)}`)