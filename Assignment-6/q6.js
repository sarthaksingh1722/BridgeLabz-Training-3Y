async function fetchProducts() {

    try {

        // Fetch API request
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        // Check response status
        if (!response.ok) {

            throw new Error("Failed to fetch products");

        }

        // Convert JSON response
        const products = await response.json();


        // Display products
        products.forEach(product => {

            console.log("Product:", product.title);

            console.log("Price: $" + product.price);

            console.log("Image:", product.image);

            console.log("----------------------");

        });

    }

    catch (error) {

        console.log(
            "Failed to load products. Please try again."
        );

        console.log(error.message);

    }

}


// Function call
fetchProducts();