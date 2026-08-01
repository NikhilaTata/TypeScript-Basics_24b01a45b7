let decimal: number = 25;
let binary: string = "";

let num = decimal;

while (num > 0) {
    let remainder = num % 2;
    binary = remainder + binary;
    num = Math.floor(num / 2);
}

console.log("Decimal:", decimal);
console.log("Binary:", binary);
export {};