const includes = (array, value) => array.some(el => el === value ? true : false)

console.log(includes([1, 2, 3], 3));
console.log(includes([1, 2, 3], 7));