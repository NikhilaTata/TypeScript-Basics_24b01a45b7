function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

let n: number = 17;

if (isPrime(n)) {
    console.log(n + " is a Prime Number");
} else {
    console.log(n + " is Not a Prime Number");
}
