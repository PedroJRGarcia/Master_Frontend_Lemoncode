const persons = ["Robert", "Jack", "Peter"];
const num = [2, 4, 6];
const random = [true, NaN, null];

const head = ([first, ]) => first;
console.log("First element is: " + head(persons));

const tail = ([first, ...array]) => array;
console.log("All but first: " + tail(num));

const init = arr => console.log("All but last one: " + arr.slice(0, -1));
init(num);

const last = arr => console.log("Last element is: " + arr.slice(-1));
last(num);

const concat = (arr1, arr2) => [...arr1, ...arr2];
console.log(concat(num, persons));

const multConcat = (...arr) => [...arr];
console.log(multConcat(...num, ...persons, ...random));

// Clone:
const cars = { Spain: "Seat", France: "Peugeot" };
const beers = { Spain: "SoupIPA", Italy: "Ichnusa" };

function clone(source) {
    const copy = {
        ...source,
    }
    console.log(copy);
};
clone(cars);

// Merge:
function merge(source, target) {
    const copy = {
        ...target,
        ...source,
    }
    console.log(copy);
};
merge(beers, cars);

// Read Books:

