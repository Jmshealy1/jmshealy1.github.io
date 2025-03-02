document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });

    // Rental Cart Functionality
    let cart = [];

    window.addToCart = (name, pricePerDay, inputId) => {
        let days = parseInt(document.getElementById(inputId).value);
        if (days < 1) days = 1; // Ensure at least 1 day rental

        let totalCost = pricePerDay * days;

        // Check if item is already in the cart
        let existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.days = days; // Update rental duration
            existingItem.totalCost = totalCost; // Update total cost
        } else {
            cart.push({ name, pricePerDay, days, totalCost });
        }

        updateCart();
    };

    const updateCart = () => {
        const cartItemsDiv = document.getElementById("cart-items");
        const cartSubtotalSpan = document.getElementById("cart-subtotal");

        cartItemsDiv.innerHTML = "";
        let subtotal = 0;

        cart.forEach((item, index) => {
            subtotal += item.totalCost; // Subtotal reflects full rental price (per day × days rented)

            cartItemsDiv.innerHTML += `<p>${item.name} - $${item.pricePerDay}/day × ${item.days} days = $${item.totalCost.toFixed(2)} 
            <button onclick="removeFromCart(${index})">Remove</button></p>`;
        });

        cartSubtotalSpan.textContent = subtotal.toFixed(2);
    };

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCart();
    };

    window.checkout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert(`Thank you for reserving your gear. Your total will be added to your overall total for the trip. Items will be available to pick up on arrival. 
        Please have your ID with you at check-in to recieve your gear.`);
        
        cart = [];
        updateCart();
    };
});
