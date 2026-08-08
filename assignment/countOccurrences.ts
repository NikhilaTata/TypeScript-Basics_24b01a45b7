let arr: number[] = [1, 2, 3, 2, 1, 4, 2, 3];

let count: { [key: number]: number } = {};

for (let num of arr) {
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
}

console.log("Occurrences:");

for (let key in count) {
    console.log(key + " -> " + count[key]);
}
export {};
