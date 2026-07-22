function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
p1.desconto(10);
console.log(p1);

const p2 = new Produto('Caneca', 15);
p2.aumento(20);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        value: 'M',
        enumerable: true,
        writable: true,
        configurable: true
    },

    tamanho2: {
        value: 'GG',
        enumerable: true,
        writable: true,
        configurable: true
    }
});
p3.aumento(30);
console.log(p3);