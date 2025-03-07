document.addEventListener("DOMContentLoaded", async () => {
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

    const jsonUrl = "https://raw.githubusercontent.com/Jmshealy1/jmshealy1.github.io/main/csce242/projects/part6/json/json-equipment.json"; 

    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error("Failed to fetch JSON file");
        const gearData = await response.json();

        console.log("JSON Loaded Successfully:", gearData);
        displayGear(gearData);
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
});

function displayGear(gearData) {
    const gearList = document.getElementById("gear-list");

    gearData.forEach(item => {
        const gearItem = document.createElement("div");
        gearItem.className = "gear-item";

        gearItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="gear-info">
                <h3>${item.name}</h3>
                <p><strong>Material:</strong> ${item.material}</p>
                <p><strong>Rating:</strong> ${item.rating}</p>
                <p>${item.description}</p>
                <p class="price">$${item.pricePerDay} per day</p>
                <div class="cart-controls">
                    <label>Days: <input type="number" id="days-${item._id}" min="1" value="1"></label>
                    <button class="add-to-cart-btn" data-id="${item._id}" data-name="${item.name}" data-price="${item.pricePerDay}">Add to Cart</button>
                </div>
            </div>
        `;

        gearList.appendChild(gearItem);
    });
    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const id = event.target.dataset.id;
            const name = event.target.dataset.name;
            const pricePerDay = parseFloat(event.target.dataset.price);
            addToCart(name, pricePerDay, `days-${id}`);
        });
    });
}

let cart = [];

window.addToCart = (name, pricePerDay, inputId) => {
    const inputElement = document.getElementById(inputId);
    let days = parseInt(inputElement.value) || 1;
    days = days < 1 ? 1 : days;
    const totalCost = pricePerDay * days;

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.days = days;
        existingItem.totalCost = totalCost;
    } else {
        cart.push({ name, pricePerDay, days, totalCost });
    }

    updateCart();
    alert(`${name} added to cart.`);
};

const updateCart = () => {
    const cartItemsDiv = document.getElementById("cart-items");
    const cartTotalSpan = document.getElementById("cart-total");

    if (!cartItemsDiv || !cartTotalSpan) return;

    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.totalCost;
        cartItemsDiv.innerHTML += `
            <p>${item.name} - $${item.pricePerDay}/day × ${item.days} days = $${item.totalCost.toFixed(2)}
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
    alert(`Thank you for reserving your gear. Items will be available for pickup upon arrival.`);
    cart = [];
    updateCart();
};

updateCart();
