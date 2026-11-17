// Parent Class
class Employee {

    constructor(name, department) {

        this.name = name;

        this.department = department;

    }

    work() {

        console.log(this.name, "is doing general employee work");

    }

}


// Child Class
class Manager extends Employee {

    constructor(name, department) {

        super(name, department);

    }

    // Method Overriding
    work() {

        console.log(this.name, "is managing the team");

    }

}


// Creating Objects
const employee1 = new Employee("Rahul", "IT");

const manager1 = new Manager("Sarthak", "Development");


// Calling Methods
employee1.work();

manager1.work();