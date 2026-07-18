// 1. Normal Parameter + Number Return Type
function ad(a: number, b: number): number {
    return a + b;
}

// 2. Default Parameter + String Return Type
function getLoc(city: string = "Vijayawada"): string {
    return city;
}

// 3. Optional Parameter + Void Return Type
function dis(name?: string): void {
    console.log("Name:", name);
}

// 4. Rest Parameter + Number Return Type
function summ(...numbers: number[]): number {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

// 5. Boolean Return Type
function even(num: number): boolean {
    return num % 2 == 0;
}

// Function Calls
console.log("Addition:", ad(10, 20));
console.log("Location:", getLoc());
console.log("Location:", getLoc("Hyderabad"));

dis();
dis("Nikhila");

console.log("Sum:", summ(10, 20, 30));

console.log("Is Even:", even(8));