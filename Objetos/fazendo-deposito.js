const cliente = {
    nome: 'Vinicius',
    idade: 20,
    cpf: '123456789',
    email: 'vinicius@email.com',
    fones: ['5255485425', '8545824865'],
    depedentes: [
        {
            nome: 'Vera',
            parentesco: 'mãe',
            dataDeNascimento: '05/08/1973'
        },
        {
            nome: 'Bi',
            parentesco: 'prima',
            dataDeNascimento: '09/11/2011'
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)

cliente.depositar(30)

console.log(cliente.saldo)