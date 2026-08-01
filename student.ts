class Student {
    id: number;
    name: string;
    course: string;

    constructor(id: number, name: string, course: string) {
        this.id = id;
        this.name = name;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
        console.log("Course:", this.course);
    }
}

let student1 = new Student(101, "Nikhila", "B.Tech");

student1.displayDetails();
export {};