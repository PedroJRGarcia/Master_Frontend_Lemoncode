const a = undefined;
const b = null;
const c = "String";

const f = input => 
    input === undefined || input === null ? "Input is Undefined or Null" : input;

console.log(f(a));
console.log(f(b));
console.log(f(c));