//Factory Functions

function criePessoa(nome, sobrenome, a, p) {
    return {
        nome, sobrenome,
        fala: function (assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criePessoa('Leonardo', 'Thome', 1.7, 86)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)



























/*const p2 = criePessoa('Bionda', 'Ferreira', 1.7, 100)
console.log(p2.imc())
console.log(p2.fala(`Falando sobre JS`))
*/