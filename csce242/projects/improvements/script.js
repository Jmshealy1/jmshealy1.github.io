document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        document.addEventListener("click", (event) => {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove("active");
            }
        });
    }

    let cart = [];

    window.addToCart = (name, pricePerDay, inputId) => {
        let inputElement = document.getElementById(inputId);
        if (!inputElement) return;
        
        let days = parseInt(inputElement.value);
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

        if (!cartItemsDiv || !cartTotalSpan) return;

        cartItemsDiv.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.totalCost; 

            cartItemsDiv.innerHTML += `<p>${item.name} - $${item.pricePerDay}/day × ${item.days} days = $${item.totalCost.toFixed(2)} 
            <button onclick="removeFromCart(${index})">Remove</button></p>`;
        });

        cartTotalSpan.textContent = total.toFixed(2);
        localStorage.setItem("gearTotal", total.toFixed(2));
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
        alert(`Thank you for reserving your gear. \nItems will be available to pick up on arrival. \nPlease have your ID, and will be added to your trip total.`);

        cart = [];
        updateCart();
    };

    let gearTotalElement = document.getElementById("gear-total");
    let packageElement = document.getElementById("package");
    let tripTotalElement = document.getElementById("trip-total");
    
    if (gearTotalElement && packageElement && tripTotalElement) {
        let gearTotal = localStorage.getItem("gearTotal") || 0;
        gearTotalElement.textContent = parseFloat(gearTotal).toFixed(2);
        
        packageElement.addEventListener("change", function() {
            let packagePrice = parseFloat(this.value === "basic" ? 500 : this.value === "deluxe" ? 1200 : 2500);
            let totalTripCost = packagePrice + parseFloat(gearTotal);
            tripTotalElement.textContent = totalTripCost.toFixed(2);
        });
    }
});