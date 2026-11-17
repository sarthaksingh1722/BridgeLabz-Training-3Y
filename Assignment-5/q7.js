function makeMultiplier(multiplier) {

    return function(number) {

        return number * multiplier;

    };

}

// Creating functions
const double = makeMultiplier(2);

const triple = makeMultiplier(3);

const quadruple = makeMultiplier(4);


// Function calls
console.log(double(5));

console.log(triple(5));

console.log(quadruple(5));