// Filter -> Retorna uma nova array, com a mesma quantidade de elementos ou menos, baseado em uma condição.
//Map -> Retorna uma nova array, com a mesma quantidade de elementos, baseado em uma condição.
// ForEach -> Não retorna uma nova array, apenas itera a array original, baseado em uma condição.
// Reduce -> Retorna um valor, baseado em uma condição.

//Retorna os números maiores que 10
//const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 11, 15, 22, 27];
//const nummerosMaiorQue10 = numbers.filter(value => value > 10); 
//console.log(nummerosMaiorQue10);






















//Retorne as pessoas que tem o nome com 5 letras ou mais;
//Retorne as pessoas com mais de 50 anos;
//Retorne as pessoas cujo nome termina com a letra "a";
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande)

const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDe50Anos);

const pessoasComNomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasComNomeTerminaComA)