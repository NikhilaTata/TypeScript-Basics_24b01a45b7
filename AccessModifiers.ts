// Access Modifiers

class Student {
    public name: string;
    private age: number;
    protected college: string;

    constructor(name: string, age: number, college: string) {
        this.name = name;
        this.age = age;
        this.college = college;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("College:", this.college);
    }
}

let s1 = new Student("Nikhila", 20, "SVECW");

console.log(s1.name);   
//console.log(s1.age);    
 //console.log(s1.college);

s1.display();