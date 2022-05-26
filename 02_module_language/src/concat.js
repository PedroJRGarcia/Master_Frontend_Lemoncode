const persons = ["James", "Jack", "Laura"];
const num = [3, 5, 9];
const random = [true, NaN, null];

const concat = (arr1, arr2) => [...arr1, ...arr2];
console.log(concat(num, persons));

const multConcat = (...arr) => [...arr];
console.log(multConcat(...num, ...persons, ...random));