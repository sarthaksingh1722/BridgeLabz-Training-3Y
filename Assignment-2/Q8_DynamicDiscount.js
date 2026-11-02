// Shopping cart
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Variables
let totalOriginalPrice = 0;

let totalAfterDiscount = 0;

// Calculate discounts
for (let product of cart) {

    let discount = 0;

    // Category-based discount
    if (product.category === "electronics") {

        discount = 10;

    } else if (product.category === "fashion") {

        discount = 5;

    }

    // Calculate discounted price
    let discountAmount = product.price * discount / 100;

    let finalPrice = product.price - discountAmount;

    totalOriginalPrice += product.price;

    totalAfterDiscount += finalPrice;

    console.log("Item:", product.item);

    console.log("Original Price:", product.price);

    console.log("Discount:", discount + "%");

    console.log("Final Price:", finalPrice);

    console.log("-----------------------");
}

// Extra discount if cart value > 50000
let extraDiscount = 0;

if (totalOriginalPrice > 50000) {

    extraDiscount = totalAfterDiscount * 5 / 100;

}

// Final amount using reduce()
let finalTotal = cart.reduce((total, product) => {

    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    return total + (product.price - product.price * discount / 100);

}, 0);

// Apply extra discount
finalTotal = finalTotal - (finalTotal * (extraDiscount > 0 ? 5 : 0) / 100);

// Display summary
console.log("Total Original Price:", totalOriginalPrice);

console.log("Total After Category Discount:", totalAfterDiscount);

console.log("Extra Discount:", extraDiscount);

console.log("Final Cart Amount:", finalTotal);