function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

export { add, subtract };

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
export {};
