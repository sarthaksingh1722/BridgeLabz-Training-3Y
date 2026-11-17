// Global counter variable
let count = 0;

// Function to increment counter
function increment() {

    count++;

    console.log("After Increment:", count);
}

// Function to decrement counter
function decrement() {

    count--;

    console.log("After Decrement:", count);
}

// Nested function example
function counterDetails() {

    let message = "Counter is updating";

    function displayCount() {

        console.log(message);
        console.log("Current Count:", count);
    }

    displayCount();
}

// Simulating button clicks
increment();

increment();

increment();

decrement();

counterDetails();

// Final counter value
console.log("Final Count:", count);