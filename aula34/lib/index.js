"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produto = { nome: 'Caneca', preco: 19.90 };
const outraCoisa = {
    ...produto,
    material: 'Porcelana'
};

outraCoisa.nome = 'Leonardo Thome';
outraCoisa.preco = 29.90;
console.log(outraCoisa);
