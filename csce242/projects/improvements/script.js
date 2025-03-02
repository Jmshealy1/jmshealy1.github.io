document.addEventListener("DOMContentLoaded", () => {
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

    let cart = [];

    window.addToCart = (name, pricePerDay, inputId) => {
        let days = parseInt(document.getElementById(inputId).value);
        if (days < 1) days = 1; 
        let totalCost = pricePerDay * days;

        let existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.days = days;
            existingItem.totalCost = pricePerDay * days;
        } else {
            cart.push({ name, pricePerDay, days, totalCost });
        }

        updateCart();
    };

    const updateCart = () => {
        const cartItemsDiv = document.getElementById("cart-items");
        const cartTotalSpan = document.getElementById("cart-total");

        cartItemsDiv.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.totalCost; 

            cartItemsDiv.innerHTML += `<p>${item.name} - $${item.pricePerDay}/day × ${item.days} days = $${item.totalCost.toFixed(2)} 
            <button onclick="removeFromCart(${index})">Remove</button></p>`;
        });

        cartTotalSpan.textContent = total.toFixed(2);
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
        alert(`Thank you for reserving your gear. 
        Items will be available to pick up on arrival. 
        Please have your ID, and will be added to your trip total.`);

        cart = [];
        updateCart();
    };
});
