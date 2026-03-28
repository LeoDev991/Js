const data = new Date('1987-01-31 00:00:00');
let diaSemana = data.getDay();
diaSemana = 3
let diaSemanaText;
switch (diaSemana) {
    case 0:
        diaSemanaText = 'Domingo'
        break;

    case 1:
        diaSemanaText = 'Segunda'
        break;
    case 2:
        diaSemanaText = 'Terça'
        break;

    case 3:
        diaSemanaText = 'Quarta'
        break;

    case 4:
        diaSemanaText = 'Quinta'
        break;

    case 5:
        diaSemanaText = 'Sexta'
        break;

    case 6:
        diaSemanaText = 'Sábado'
        break;

}

console.log(diaSemana, diaSemanaText)