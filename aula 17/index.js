function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esprando instância de Date.');
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
    });
}

const hora = retornaHora();
console.log(hora)