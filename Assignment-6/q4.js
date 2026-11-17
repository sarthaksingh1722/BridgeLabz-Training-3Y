// Server A
function serverA() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() > 0.2) {

                resolve("Server A deployed successfully");

            } else {

                reject("Server A deployment failed");

            }

        }, 2000);

    });

}


// Server B
function serverB() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() > 0.2) {

                resolve("Server B deployed successfully");

            } else {

                reject("Server B deployment failed");

            }

        }, 3000);

    });

}


// Promise.all()
Promise.all([serverA(), serverB()])

    .then((results) => {

        console.log(results);

        console.log("Deployment completed for all servers");

    })

    .catch((error) => {

        console.log("Deployment Error:", error);

    });


// Promise.race()
Promise.race([serverA(), serverB()])

    .then((result) => {

        console.log("Fastest response:", result);

    })

    .catch((error) => {

        console.log("Fastest response failed:", error);

    });