function isPrime(n) {
    let sqrtn = Math.sqrt(n);

    for (let i = 2; i <= sqrtn; i++)
        if (n % i === 0) return console.log(n + " is NOT a prime");
    return console.log(n + " is Prime" );
}

function showPrimes (from, to) {
    for (let i = from; i <= to; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

console.log(showPrimes(1, 100));
