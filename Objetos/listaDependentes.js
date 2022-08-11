const clientes = [
    {
        nome: 'Vinicius',
        idade: 20,
        cpf: '123456789',
        email: 'vinicius@email.com',
        fones: ['5255485425', '8545824865'],
        depedentes: [
            {
                nome: 'Vera',
                parentesco: 'mãe',
                trabalha: 'sim',
                dataDeNascimento: '05/08/1973'
            },
            {
                nome: 'Bi',
                parentesco: 'prima',
                trabalha: 'sim',
                dataDeNascimento: '09/11/2011'
            }
        ],

    },
    {
        nome: "Juliana",
        cpf: '524872445211',
        depedentes: [
            {
            nome: "Sofia",
            parentesco: "filha",
            trabalha: 'não',
            dataDeNascimento: "30/08/2020"
        }]
    }
]

const listaDependentes = [...clientes[0].depedentes, ...clientes[1].depedentes]

console.table(listaDependentes)