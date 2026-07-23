// Produto -> aumento, desconto
// Camiseta = cor, Caneca = mater ial

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco);

}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produtp = new Produto('Gen', 111);
const camiseta = new Camiseta ('regata', 7.5, 'preto');
console.log(camiseta);