const a1 = [1, 2, 3, 4, 5];
const a2 = [6, 7, 8, 9, 10];
// const a3 = a1.concat(a2, 11, 12, 13, 'Leonardo');
const a3 = [...a1, ...a2, ...[11, 12, 13], 'Leonardo'];

console.log(a3);