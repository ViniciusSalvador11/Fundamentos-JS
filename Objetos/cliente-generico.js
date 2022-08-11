function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const Vini = new Cliente("Vini", "5854582245","vini@email.com", 500)

console.log(Vini)