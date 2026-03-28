function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)