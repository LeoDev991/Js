// Dobre os numeros do array e imprima o resultado

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosDobrados = numeros.map(numero => numero * 2);
//console.log(numerosDobrados);



// Para cada elemento:
// 1. Retorne apenas uma string com o nome da pessoa
// 2. Remova apenas a chave "nome" do objeto e retorne o restante
// 3. Adicione uma chave id em cada objeto, sendo a posição do array como valor

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => {
    const { nome, ...resto } = obj;
    return resto;
});
console.log(idades);

const pessoasComId = pessoas.map((obj, indice) => {
    return { id: indice, ...obj };
})
console.log(pessoasComId);