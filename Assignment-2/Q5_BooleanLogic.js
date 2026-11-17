// Security conditions
let isDoorLocked = true;

let isWindowClosed = true;

let isAlarmOn = true;

let isOwnerInside = true;

// Function to check security
function checkSecurity() {

    // Check all security conditions
    let isSecure = isAlarmOn &&
                   isDoorLocked &&
                   isWindowClosed &&
                   isOwnerInside;

    if (isSecure) {
        console.log("System Status: Secure");
    } else {
        console.log("System Status: Unsafe");
    }
}

// First test
console.log("Test 1:");
checkSecurity();

// Change values
isDoorLocked = false;

console.log("Test 2:");
checkSecurity();

// Change values again
isDoorLocked = true;
isAlarmOn = false;

console.log("Test 3:");
checkSecurity();

// Demonstrate OR and NOT operators
console.log("Is alarm or owner present:", isAlarmOn || isOwnerInside);

console.log("Is door unlocked:", !isDoorLocked);