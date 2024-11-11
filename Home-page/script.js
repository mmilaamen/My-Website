// Shopping Cart Array
let cart = [];

// Function to Add Item to Cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} has been added to your cart.`);
    updateCart();
}

// Function to Update Cart Display
function updateCart() {
    console.log("Current Cart:", cart);
    // Add code to dynamically update cart display on the page
}
