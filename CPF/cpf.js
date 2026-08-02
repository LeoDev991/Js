function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2); 
    const digito1 = this.digitoValido(cpfParcial);
    //const digito2 = this.digitoValido(cpfParcial + digito1)
    //return this.cpfLimpo === cpfParcial + digito1 + digito2;
    return true;

}

ValidaCPF.prototype.digitoValido = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const digito = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val)); 
        regressivo --;
        console.log(regressivo, val, regressivo * val)
        return ac;
    }, 0)

    console.log(digito);
}

const cpf = new ValidaCPF('070.987.720-03');
console.log(cpf.valida());