class Cliente {                                 /// Classes sempre iniciam com letra maiuscula!!!
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}


class ClientePoup extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoup){
        super(nome, email, cpf, saldo)  //informaçoes que você precisa herdar do classe base, não necessariamente todos os parametros
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }

}

const vini = new ClientePoup("Vinicius", "vini@email.com", "55454424574", 250, 500)

// console.log(vini)

vini.depositar(25)
vini.depositarPoup(55)

console.log(vini)