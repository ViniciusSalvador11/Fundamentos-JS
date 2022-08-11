const cliente = {
    nome: 'Vinicius',
    idade: 20,
    cpf: '123456789',
    email: 'vinicius@email.com',
    fones: ["5255485425", "8545824865"]      ////adicionar listas no objeto
}

cliente.fones.forEach(fone => console.log(fone))