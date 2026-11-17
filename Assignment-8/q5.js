// User Class
class User {

    constructor(name, rating) {

        this.name = name;

        this.rating = rating;

    }

}


// Driver Class
class Driver extends User {

    constructor(name, rating, vehicle) {

        super(name, rating);

        this.vehicle = vehicle;

    }

}


// Trip Class
class Trip {

    constructor(fromLocation, toLocation, distance) {

        this.fromLocation = fromLocation;

        this.toLocation = toLocation;

        this.distance = distance;

    }

    calculateFare() {

        if (
            typeof this.distance !== "number" ||
            !Number.isFinite(this.distance) ||
            this.distance < 0
        ) {

            throw new Error("Invalid distance provided!");

        }

        const pricePerKm = 12;

        return this.distance * pricePerKm;

    }

}


// Creating Objects
const driver1 = new Driver("Rahul", 4.8, "Swift");

const trip1 = new Trip("Mathura", "Agra", 60);


// Display Information
console.log("Driver:", driver1.name);

console.log("Rating:", driver1.rating);

console.log("Vehicle:", driver1.vehicle);


// Calculate Fare
try {

    console.log("From:", trip1.fromLocation);

    console.log("To:", trip1.toLocation);

    console.log("Distance:", trip1.distance, "KM");

    console.log("Total Fare: ₹", trip1.calculateFare());

}

catch (error) {

    console.log("Trip Error:", error.message);

}