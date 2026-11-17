// Original product name
let productName = " wireless headphones PRO ";

// Remove extra spaces
let cleanedName = productName.trim();

// Convert into lowercase
cleanedName = cleanedName.toLowerCase();

// Capitalize first letter of each word
cleanedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace Pro with Pro Edition
cleanedName = cleanedName.replace("Pro", "Pro Edition");

// Display result
console.log("Original Name:", productName);
console.log("Cleaned Product Name:", cleanedName);
console.log("Product Name Length:", cleanedName.length);