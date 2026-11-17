// Product Array
const products = [

    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 50000,
        stock: 3
    },

    {
        id: 2,
        name: "Mobile",
        category: "Electronics",
        price: 20000,
        stock: 10
    },

    {
        id: 3,
        name: "Shoes",
        category: "Fashion",
        price: 3000,
        stock: 4
    },

    {
        id: 4,
        name: "T-Shirt",
        category: "Fashion",
        price: 1000,
        stock: 15
    },

    {
        id: 5,
        name: "Watch",
        category: "Accessories",
        price: 5000,
        stock: 2
    }

];


// 1. Low Stock Products
function getLowStockProducts() {

    return products.filter(product => {

        return product.stock <= 5;

    });

}


// 2. Sort Products By Price
function sortProductsByPrice() {

    return [...products].sort((a, b) => {

        return a.price - b.price;

    });

}


// 3. Calculate Total Inventory Value
function calculateTotalInventoryValue() {

    return products.reduce((total, product) => {

        return total + (product.price * product.stock);

    }, 0);

}


// 4. Group Products By Category
function groupByCategory() {

    return products.reduce((grouped, product) => {

        const category = product.category;

        if (!grouped[category]) {

            grouped[category] = [];

        }

        grouped[category].push(product);

        return grouped;

    }, {});

}


// Testing All Functions

console.log("Low Stock Products:");

console.table(getLowStockProducts());


console.log("Products Sorted By Price:");

console.table(sortProductsByPrice());


console.log(
    "Total Inventory Value: ₹",
    calculateTotalInventoryValue()
);


console.log("Products Grouped By Category:");

console.log(groupByCategory());