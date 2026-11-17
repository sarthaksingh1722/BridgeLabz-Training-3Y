// Promise-based function
function getBugs() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const isSuccess = Math.random() > 0.3;

            if (isSuccess) {

                const bugs = [
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ];

                resolve(bugs);

            } else {

                reject("Failed to fetch bugs!");

            }

        }, 1000);

    });

}


// Calling function
getBugs()

    .then((bugs) => {

        console.log("Bug Report:");

        console.table(bugs);

    })

    .catch((error) => {

        console.log("Error:", error);

    });