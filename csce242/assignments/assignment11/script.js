const pizzas = [
    { name: "Hawaiian", image: "../pizzaimages/hawaiian.jpg", ingredients: "Ham, Pineapple", sauce: "Tomato", cheese: "Mozzarella", price: 15.99 },
    { name: "Buffalo Chicken Ranch", image: "../pizzaimages/buffalochickenranch.jpg", ingredients: "Chicken, Ranch Sauce", sauce: "Buffalo", cheese: "Cheddar", price: 17.49 },
    { name: "Margarita", image: "../pizzaimages/margaritapizza.jpg", ingredients: "Basil, Tomatoes", sauce: "Olive Oil", cheese: "Mozzarella", price: 19.20 },
    { name: "Pepperoni", image: "../pizzaimages/pepperoni.jpg", ingredients: "Pepperoni", sauce: "Tomato", cheese: "Mozzarella", price: 16.75 },
    { name: "Veggie", image: "../pizzaimages/veggie.jpg", ingredients: "Mushrooms, Olives, Peppers", sauce: "Tomato", cheese: "Mozzarella", price: 14.99 }
];

const pizzaList = document.getElementById("pizza-list");
const modal = document.getElementById("pizzaModal");

const openModal = (pizza) => {
    document.getElementById("modal-title").textContent = pizza.name;
    document.getElementById("modal-ingredients").textContent = pizza.ingredients;
    document.getElementById("modal-sauce").textContent = pizza.sauce;
    document.getElementById("modal-cheese").textContent = pizza.cheese;
    document.getElementById("modal-price").textContent = pizza.price.toFixed(2);
    document.getElementById("modal-img").src = "images/" + pizza.image;
    modal.style.display = "flex";
};

const closeModal = () => modal.style.display = "none";

pizzas.forEach(pizza => {
    const div = document.createElement("div");
    div.className = "pizza-item";
    div.innerHTML = `<h3>${pizza.name}</h3><img src="images/${pizza.image}" alt="${pizza.name}">`;
    div.onclick = () => openModal(pizza);
    pizzaList.appendChild(div);
});
