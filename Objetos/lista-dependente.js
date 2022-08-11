// adicionando mais um depedente no objeto

const cliente = {
    nome: 'Vinicius',
    idade: 20,
    cpf: '123456789',
    email: 'vinicius@email.com',
    fones: ['5255485425', '8545824865'],
    depedentes: [{
        nome: 'Vera',
        parentesco: 'mãe',
        dataDeNascimento: '05/08/1973'
    }]
}

cliente.depedentes.push({
    nome: "Bi",
    parentesco: "prima",
    dataDeNascimento: "09/11/2011"
})

// console.log(cliente)

const parenteMaisNova = cliente.depedentes.filter(parente => parente.dataDeNascimento === "09/11/2011")
console.log(parenteMaisNova[0].nome)