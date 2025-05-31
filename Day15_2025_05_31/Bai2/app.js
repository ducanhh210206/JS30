class Employee {
    constructor(name, position, baseSalary, workingDays) {
        this.name = name;
        this.position = position;
        this.baseSalary = baseSalary;
        this.workingDays = workingDays;
    }
    calculateSalary() {
        return this.baseSalary * this.workingDays;
    }
    show() {
        console.log(`Name: ${this.name}, Position: ${this.position}, Salary: ${this.calculateSalary()}`);
    }
}
