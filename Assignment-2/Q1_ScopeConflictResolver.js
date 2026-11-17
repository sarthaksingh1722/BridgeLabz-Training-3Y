// Global variable
let bonus = 5000;

function calculateSalary() {

    // Local variables
    let salary = 40000;
    let isPermanent = true;

    // Add bonus only if employee is permanent
    if (isPermanent) {
        salary = salary + bonus;
    }

    // Display total salary
    console.log("Total Salary:", salary);

    // Changing local variable
    isPermanent = false;

    console.log("After changing isPermanent:", isPermanent);
    console.log("Global Bonus:", bonus);
}

// Function call
calculateSalary();

// Global scope remains unchanged
console.log("Bonus outside function:", bonus);