// Constructor Example

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

// Create Object
let p = new Person("Nikhila", 20);

// Call Method
p.print();