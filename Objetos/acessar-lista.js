const cliente = {
    nome: 'Vinicius',
    idade: 20,
    cpf: '123456789',
    email: 'vinicius@email.com'
}

const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))