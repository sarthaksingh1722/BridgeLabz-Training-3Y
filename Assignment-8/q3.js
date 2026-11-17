// Constructor Function
function Product(name, price) {

    this.name = name;

    this.price = price;

}


// Prototype Method
Product.prototype.applyDiscount = function(percent) {

    if (percent < 0 || percent > 100) {

        throw new Error("Invalid discount percentage");

    }

    const discount = (this.price * percent) / 100;

    const finalPrice = this.price - discount;

    return finalPrice;

};


// Creating Products
const product1 = new Product("Laptop", 50000);

const product2 = new Product("Mobile", 20000);

const product3 = new Product("Headphones", 3000);


// Applying Discounts
try {

    console.log(
        product1.name,
        "Final Price:",
        product1.applyDiscount(10)
    );

    console.log(
        product2.name,
        "Final Price:",
        product2.applyDiscount(20)
    );

    console.log(
        product3.name,
        "Final Price:",
        product3.applyDiscount(15)
    );

}

catch (error) {

    console.log(error.message);

}