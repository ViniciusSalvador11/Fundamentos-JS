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
                dataDeNascimento: '05/08/1973'
            },
            {
                nome: 'Bi',
                parentesco: 'prima',
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
            dataDeNascimento: "30/08/2020"
        }]
    }
]

const listaDependentes = [...clientes[0].depedentes, ...clientes[1].depedentes] // ... copia as propriedades de objetos para outros

console.table(listaDependentes)