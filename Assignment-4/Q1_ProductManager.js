"use strict";

// Create Product class
class Product {

    constructor(id, name, price, category) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount
    applyDiscount(discountPercentage) {

        let discount = this.price * discountPercentage / 100;

        this.price = this.price - discount;

        console.log(`${discountPercentage}% discount applied to ${this.name}`);
    }

    // Display product details
    displayDetails() {

        return `
        Product ID: ${this.id}
        Product Name: ${this.name}
        Price: ₹${this.price}
        Category: ${this.category}
        --------------------------
        `;
    }
}

// Create product objects
const product1 = new Product(101, "Laptop", 55000, "Electronics");

const product2 = new Product(102, "Headphones", 1500, "Electronics");

const product3 = new Product(103, "Mouse", 500, "Accessories");

const product4 = new Product(104, "Keyboard", 2000, "Accessories");

const product5 = new Product(105, "Mobile", 25000, "Electronics");

// Store products in array
const products = [
    product1,
    product2,
    product3,
    product4,
    product5
];

// Apply discount
product1.applyDiscount(10);

product2.applyDiscount(10);

// Filter products with price greater than 1000
const expensiveProducts = products.filter(product => product.price > 1000);

// Display filtered products
console.log("====== EXPENSIVE PRODUCTS ======");

expensiveProducts.forEach(product => {

    console.log(product.displayDetails());

});