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
});
