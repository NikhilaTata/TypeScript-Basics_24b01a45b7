// Generic Variable
let value: string | number = "Hello";
console.log("Generic Variable:", value);

// Generic Function
function display<T>(data: T): T {
    return data;
}

console.log("Generic Function:", display<number>(100));
console.log("Generic Function:", display<string>("TypeScript"));

// Generic Constraint
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log("String Length:", getLength("Hello"));
console.log("Array Length:", getLength([10, 20, 30, 40]));
export {};