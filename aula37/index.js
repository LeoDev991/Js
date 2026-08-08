// Superclass

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)

    } else {
        this.saldo -= valor;
    }
    this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo()
}

Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: ${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

const contaPoupanca = new Conta(11, 22, 0);
contaPoupanca.depositar(10);
contaPoupanca.sacar(10);
contaPoupanca.sacar(10);

console.log('---------------------');

const cc = new ContaCorrente(11, 22, 0, 200);
cc.depositar(10);
cc.sacar(210);
// cc.sacar(10);