console.log("Start");


// Macrotask
setTimeout(() => {

    console.log("SetTimeout callback");

}, 0);


// Microtask
Promise.resolve().then(() => {

    console.log("Promise callback");

});


// Synchronous code
console.log("Synchronous log");


console.log("End");