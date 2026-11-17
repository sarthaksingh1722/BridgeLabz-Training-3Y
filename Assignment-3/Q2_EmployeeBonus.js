"use strict";

// Employee information
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

// Process employee data
for (let employee of employees) {

    try {

        // Validate employee properties
        if (
            !employee ||
            employee.name === undefined ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error("Missing employee information");
        }

        // Convert strings into numbers
        let salary = Number(employee.salary);

        let years = Number(employee.years);

        // Validate numeric values
        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error("Invalid salary or experience");
        }

        // Calculate bonus
        let bonus;

        if (years > 3) {

            bonus = salary * 0.10;

        } else {

            bonus = salary * 0.05;
        }

        // Calculate total salary
        let totalSalary = salary + bonus;

        // Display employee details
        console.log(`
        ------ EMPLOYEE DETAILS ------

        Name: ${employee.name}

        Salary: ${salary}

        Experience: ${years} Years

        Bonus: ${bonus}

        Total Salary: ${totalSalary}

        ------------------------------
        `);

    } catch (error) {

        console.log("Error:", error.message);
    }
}