// Função contrutora retorna OBJETOS
//Função fábrica cria OBJETOS

function Pessoa(nome,sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa ("Leonardo", "Thome")
const p2 = new Pessoa ("Bionda", "Ferreira")

console.log(p2.nome)