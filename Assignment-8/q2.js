// Menu Items
const menu = [

    { name: "Pizza", price: 250 },

    { name: "Burger", price: 120 },

    { name: "Pasta", price: 180 },

    { name: "Sandwich", price: 100 }

];


// Calculate Bill Function
function calculateBill(orderItems) {

    // Extract prices using map()
    const priceList = orderItems.map(itemName => {

        const item = menu.find(item => item.name === itemName);

        if (!item) {

            throw new Error(itemName + " is not available!");

        }

        return item.price;

    });


    // Calculate total using reduce()
    const total = priceList.reduce((sum, price) => {

        return sum + price;

    }, 0);


    console.log("Price List:", priceList);

    console.log("Total Bill: ₹", total);

}


// Valid Order
try {

    calculateBill(["Pizza", "Burger", "Pasta"]);

}

catch (error) {

    console.log("Order Error:", error.message);

}


// Invalid Order
try {

    calculateBill(["Pizza", "Sushi"]);

}

catch (error) {

    console.log("Order Error:", error.message);

}