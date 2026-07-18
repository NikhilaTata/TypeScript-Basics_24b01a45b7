class Student {
    readonly rollNo: number;
    static college: string = "SVECW";

    constructor(rollNo: number) {
        this.rollNo = rollNo;
    }

    display() {
        console.log("Roll No:", this.rollNo);
        console.log("College:", Student.college);
    }
}

let s1 = new Student(101);

s1.display();

// Access Static Member
console.log(Student.college);

// Error (Cannot change readonly property)
// s1.rollNo = 102;