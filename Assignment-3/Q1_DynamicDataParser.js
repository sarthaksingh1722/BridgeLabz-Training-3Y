"use strict";

// Mixed API data
const apiData = [
    "25",
    "true",
    "false",
    "NaN",
    " ",
    "100px",
    "3.14",
    null,
    undefined
];

// Arrays to store results
let validNumbers = [];
let invalidNumbers = [];

// Loop through API data
for (let value of apiData) {

    // Convert into different data types
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    console.log("\nOriginal Value:", value);

    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    // Check invalid numeric values
    if (
        value === undefined ||
        (typeof value === "string" && value.trim() === "") ||
        !Number.isFinite(numberValue)
    ) {

        invalidNumbers.push(value);

        console.log("Status: Invalid Number");

    } else {

        validNumbers.push(numberValue);

        console.log("Status: Valid Number");
    }
}

// Final report
console.log("\n========== DATA REPORT ==========");

console.log("Valid Numeric Data:", validNumbers);

console.log("Invalid Data:", invalidNumbers);

console.log("Valid Count:", validNumbers.length);

console.log("Invalid Count:", invalidNumbers.length);

console.log("=================================");