"use strict";
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
        let estoquePrivado = estoque;
        Object.defineProperty(this, 'estoque', {
            enumerable: true,
            configurable: true,
            get: () => {
                return estoquePrivado;
            },
            set: (valor) => {
                if (typeof valor !== 'number') {
                    throw new TypeError('Valor inválido');
                }
                estoquePrivado = valor;
            }
        });
    }
}
const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
p1.estoque = 300;
console.log(p1.estoque);
