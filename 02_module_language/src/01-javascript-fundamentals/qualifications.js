const data = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

function average() {
    const arr = Object.values(data);
    const sum = (acc, obj) => acc + obj;
    const avg = arr.reduce(sum, 0) / arr.length;
    
    return avg;
}

function printAverage(avg) {

    if (avg === 10) {
        console.log("Distinction");
    } else if (avg <10 && avg >=9) {
        console.log("Excellent");
    } else if (avg <9 && avg >=7) {
        console.log("Very Good");
    } else if (avg <7 && avg >=6) {
        console.log("Good");
    } else if (avg <6 && avg >=5) {
        console.log("Sufficient");
    } else if (avg <5 && avg >=4) {
        console.log("Insufficient");
    } else if (avg <4) {
        console.log("Very Deficient");
    }

    return console.log(avg);
}

printAverage(average());