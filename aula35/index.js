// Construtora

function pessoa (nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome 
}

//. Instancia
const pessoa1 = new pessoa('Leonardo', 'Thome')
const pessoa2 = new pessoa('Maria', 'Silva')

console.dir(pessoa1)
console.dir(pessoa2)