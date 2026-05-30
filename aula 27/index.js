const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nomes.splice(indice, delete, elem1, elem2, elem3)
// indice: a partir de qual indice começar a modificar o array
// delete: quantos elementos devem ser removidos a partir do indice
// elem1, elem2, elem3: os elementos a serem adicionados a partir do indice

// const removidos = nomes.splice(3, 2)
// console.log(nomes, removidos)

// const adiciona = nomes.splice(2, 0, 'Luiz')
// console.log(nomes, adiciona)

const substitui = nomes.splice(3, 2, 'Luiz', 'Maria')
console.log(nomes, substitui)