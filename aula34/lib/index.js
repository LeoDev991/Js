"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produto = { nome: 'Caneca', preco: 19.90 };
const outraCoisa = produto;
produto.nome = 'Leonardo Thome';
console.log(outraCoisa);
