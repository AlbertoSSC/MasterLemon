console.log("********************************  109 - Primes");

function isPrime(number) {
    if (number === 0 || number === 1 || number === 2) return false;

    for (let x = 2; x < number; x++) {
        if (number % x === 0) {
            return false;
        }
    }
    return true;
};

function showPrimes(from, to) {
    for (let i = from; i <= to; i++) {
        if(isPrime(i)){
            console.log( i + 'is PRIME!')
        } else {
            console.log(i + 'is not a prime')
        };
    }
};

showPrimes(1, 100);