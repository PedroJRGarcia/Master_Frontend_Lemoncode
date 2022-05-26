const persons = ["Robert", "Jack", "Peter"];
const num = [2, 4, 6];


const head = ([ first ]) => first;
console.log("First element is: " + head(persons));


const tail = ([, ...array]) => array;
console.log("All but first: " + tail(num));


const init = arr => console.log("All but last one: " + arr.slice(0, -1));
init(num);


const last = arr => console.log("Last element is: " + arr.slice(-1));
last(num);