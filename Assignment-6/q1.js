// Step 1: Boil Water
function boilWater() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() > 0.2) {

                console.log("Water boiled successfully!");

                resolve();

            } else {

                reject("Water boiling failed!");

            }

        }, 1000);

    });

}


// Step 2: Brew Coffee
function brewCoffee() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() > 0.2) {

                console.log("Coffee brewed successfully!");

                resolve();

            } else {

                reject("Coffee brewing failed!");

            }

        }, 1500);

    });

}


// Step 3: Pour Coffee
function pourCoffee() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() > 0.2) {

                console.log("Coffee poured into cup!");

                resolve();

            } else {

                reject("Pouring coffee failed!");

            }

        }, 1000);

    });

}


// Promise Chaining
boilWater()

    .then(() => brewCoffee())

    .then(() => pourCoffee())

    .then(() => {

        console.log("Coffee ready for the team!");

    })

    .catch((error) => {

        console.log("Error:", error);

    });