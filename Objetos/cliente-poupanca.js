function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo) // puxa os dados de outra função
    this.saldoPoup = saldoPoup
}

const Vini = new Cliente("Vini", "5554487877", 'vini@email.com', 528)

const Ju = new ClientePoupanca("Ju", "458758454", "ju@email.com", 250, 200)

// console.log(Ju)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

Ju.depositarPoup(25)

console.log(Ju.saldoPoup)
console.log(Vini.hasOwnProperty('saldoPoup'))
console.log(Ju.hasOwnProperty('saldoPoup'))
console.log(Vini instanceof Cliente)
console.log(typeof Vini)
console.log(typeof Ju)
console.log(Ju instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.construtor === Function)
