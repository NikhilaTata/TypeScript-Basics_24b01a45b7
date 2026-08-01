namespace MathOperations {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }

    export function divide(a: number, b: number): number {
        return a / b;
    }
}

console.log("Addition:", MathOperations.add(20, 10));
console.log("Subtraction:", MathOperations.subtract(20, 10));
console.log("Multiplication:", MathOperations.multiply(20, 10));
console.log("Division:", MathOperations.divide(20, 10));
export {};
