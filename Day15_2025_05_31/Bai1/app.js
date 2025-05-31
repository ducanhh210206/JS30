class Student{
    constructor(id,name,email,age) {    
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }
    displayInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Age: ${this.age}`);
        console.log(`-----------------`)
    }
}
const nam = new Student1(1, "John Doe", "johndoe@example.com", 25);
const nu = new Student2(2, "Jane Doe", "janedoe@example.com", 30);
nam.displayInfo();
nu.displayInfo();