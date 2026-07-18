// Arrow Function

const fun = () => {
    console.log("Hello");
};

const plus = (a: number, b: number) => {
    return a + b;
};

const square = (n: number) => n * n;

fun();
console.log(plus(10, 20));
console.log(square(5));