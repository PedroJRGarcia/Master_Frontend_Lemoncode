const cars = { Spain: "Seat", France: "Peugeot" };
const beers = { Spain: "SoupIPA", Italy: "Ichnusa" };


function clone(source) {
    const copy = {
        ...source,
    }
    console.log(copy);
};
clone(cars);


function merge(source, target) {
    const copy = {
        ...target,
        ...source,
    }
    console.log(copy);
};
merge(beers, cars);