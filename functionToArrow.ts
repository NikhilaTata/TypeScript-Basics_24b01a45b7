// 1. No Parameters
const Greet = () => {
    console.log("Hello");
};

// 2. Parameters
const key = (a: number, b: number) => {
    return a + b;
};

// 3. Default Parameter
const place = (city: string = "Vijayawada") => {
    return city;
};

// 4. Optional Parameter
const display = (name?: string) => {
    console.log(name);
};

// Function Calls
Greet();
console.log(key(10, 20));
console.log(place());
console.log(place("Vizag"));
display();
display("Nikhila");