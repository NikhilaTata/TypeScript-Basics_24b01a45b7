namespace MathOperations {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }
}

console.log("Addition:", MathOperations.add(10, 5));
console.log("Multiplication:", MathOperations.multiply(10, 5));
export {};