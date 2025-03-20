document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const resultMessage = document.getElementById("result");

    try {
        let response = await fetch(form.action, {
            method: "POST",
            mode: "no-cors",
            body: formData
        });

        if (response.ok) {
            resultMessage.textContent = "Your message has been sent successfully!";
            resultMessage.style.color = "green";
            resultMessage.style.fontWeight = "bold";
            resultMessage.style.marginTop = "10px";
            resultMessage.style.display = "block";
            form.reset();
        } else {
            throw new Error("Something went wrong. Please try again.");
        }
    } catch (error) {
        resultMessage.textContent = error.message;
        resultMessage.style.color = "red";
        resultMessage.style.fontWeight = "bold";
        resultMessage.style.marginTop = "10px";
        resultMessage.style.display = "block";
    }
});