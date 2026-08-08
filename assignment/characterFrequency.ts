let str: string = "programming";

let frequency: { [key: string]: number } = {};

for (let ch of str) {
    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}

console.log(frequency);
export {};
