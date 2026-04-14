//Arguments que sustenta todos os argumentos enviados.
//Argumentos são o que enviamos (colocamos) nos parâmetros

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9)