const data = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

const getAverage = data => {
    const arr = Object.values(data);
    const sum = (acc, obj) => acc + obj;
    const average = arr.reduce(sum, 0) / arr.length;
    return average;
};

const between = (x, min, max) => x >= min && x < max;

const spanishCalification = x => {
    if(x === 10) {
        console.log('Matrícula de Honor');
    } else if(between(x, 9, 10)) {
        console.log('Sobresaliente');
    } else if(between(x, 7, 9)) {
        console.log('Notable');
    } else if(between(x, 6, 7)) {
        console.log('Bien');
    } else if(between(x, 5, 6)) {
        console.log('Suficiente');
    } else if(between(x, 4, 5)) {
        console.log('Insuficiente');
    } else if(x < 4) {
        console.log('Muy deficiente');
    } else {
        console.log('Unknown Calification');
    }
};

spanishCalification(getAverage(data));