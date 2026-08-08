function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let a = 12;
let b = 18;

let gcdValue = gcd(a, b);
let lcmValue = (a * b) / gcdValue;

console.log("GCD =", gcdValue);
console.log("LCM =", lcmValue);
