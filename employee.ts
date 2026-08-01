class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    displayEmployee(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        console.log("Department:", this.department);
    }
}

let manager = new Manager("Nikhila", 50000, "IT");

console.log(manager.name);

manager.showDepartment();

manager.displayEmployee();
export {};