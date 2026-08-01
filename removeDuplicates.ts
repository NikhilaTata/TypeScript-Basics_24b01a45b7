let str: string = "programming";

let result = "";

for (let ch of str) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log("Original:", str);
console.log("Without Duplicates:", result);
export {};