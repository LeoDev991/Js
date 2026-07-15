"use strict";
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
        Object.defineProperty(this, 'estoque', {
            value: estoque,
            writable: true,
            enumerable: true,
            configurable: true
        });
        Object.defineProperties(this, {
            nome: {
                value: nome, // valor da chave
                writable: true, //permite alterar o valor da chave
                enumerable: true, //mostra a chave 
                configurable: true //permite deletar a chave
            },
            preco: {
                value: preco,
                writable: true,
                enumerable: true,
                configurable: true,
            }
        });
    }
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));
for (let chave in p1) {
    console.log(chave);
}
