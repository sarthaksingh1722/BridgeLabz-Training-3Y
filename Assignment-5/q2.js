// Main function
function applyOperation(numbers, operation) {

    let result = numbers.map(operation);

    return result;
}

// Array
const numbers = [1, 2, 3, 4];

// Double operation
function double(num) {
    return num * 2;
}

// Square operation
function square(num) {
    return num * num;
}

// Function calls
console.log("Double:", applyOperation(numbers, double));

console.log("Square:", applyOperation(numbers, square));