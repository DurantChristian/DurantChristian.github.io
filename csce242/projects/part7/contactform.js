document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = () => {
        document.getElementById("nav-items").classList.toggle("hidden");
    };

    document.getElementById("toggle-nav").onclick = toggleMenu;

    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        formData.append("access_key", "817cffc5-dfd0-4c25-8906-e6530a0c8308");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (response.ok && result.success) {
                responseMessage.textContent = "Your message has been sent successfully!";
                responseMessage.className = "message success";
                responseMessage.style.display = "block";
                form.reset();
            } else {
                throw new Error(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            responseMessage.textContent = error.message;
            responseMessage.className = "message error";
            responseMessage.style.display = "block";
        }
    });
});