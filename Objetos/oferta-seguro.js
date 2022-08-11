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
    depositar: function (valor) {
        this.saldo += valor
    }
}

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj); // pega as keys do objeto
    if(propsClientes.includes("depedentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)
// Object.values(cliente) = pega os valores do objeto