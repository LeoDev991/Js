//Hoje vou aprender a como validar um CPF

//705.484.450-XX

/*
7x     0x    5x     4x      8x.     4x.      4x.      5x.      0x
10.    9.    8.     7.      6.      5.       4.       3.       2
70.    0.    40.    28.     48.     20.      16.      15.      0 = 237 (somar todos os resultados)
11 - (237 % 11) = 11 - 6 = 5 (Primeiro Digito) Se o resultado for maior que 9, o digito será 0, caso contrário será o próprio resultado.


7x     0x    5x     4x      8x.     4x.      4x.      5x.      0x.  5x
11    10.    9.     8.      7.      6.       5.       4.       3    2
77.    0.    45.   32.     56.     24.      20.      20.       0.   10 = 284 (somar todos os resultados)
11 -  (284 % 11) = 11 - 9 = 2 (Segundo Digito)

*/

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D/g, ''); //Tudo o que não for número será subistituido por nada, ou seja, será removido.

let cpfArray =  Array.from(cpfLimpo); // Transforma uma String em um Array