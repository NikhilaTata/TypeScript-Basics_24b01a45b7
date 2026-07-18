// Class with properties and methods

class Human {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} is speaking.`);
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

let person = new Human("Nikhila", 20);

// Call Methods
console.log("Name:", person.name);
console.log("Age:", person.age);
person.speak();
person.walk();