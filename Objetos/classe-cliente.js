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

const vini = new Cliente("Vinicius", "vini@email.com", "580544552881", 250)

console.log(vini)

vini.depositar(525)
vini.exibirSaldo()