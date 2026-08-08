let arr: number[] = [10, 20, 30, 20, 40, 10, 50];

let duplicates: number[] = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
}

console.log("Duplicate Elements:", duplicates);
export {};
