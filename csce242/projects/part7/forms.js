document.getElementById("contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const messageDiv = document.getElementById("form-message");

    if (!name || !email || !message) {
        messageDiv.textContent = "All fields are required.";
        messageDiv.className = "form-feedback error";
        return;
    }

    try {
        const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            messageDiv.textContent = "Message sent successfully!";
            messageDiv.className = "form-feedback success";
            form.reset();
        } else {
            throw new Error("Network error");
        }
    } catch (error) {
        messageDiv.textContent = "Something went wrong. Please try again later.";
        messageDiv.className = "form-feedback error";
    }
});
