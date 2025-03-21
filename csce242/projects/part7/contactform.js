const EmailResult = async (e) => {
    e.preventDefault();

    const result = document.getElementById("result");
    const form = document.getElementById("contact-form");

    let missingFields = [];
    if (!object.name) missingFields.push("Name");
    if (!object.email) missingFields.push("Email");
    if (!object.contact-method) missingFields.push("Contact-method");
    if (!object.subject) missingFields.push("Subject");
    if (!object.message) missingFields.push("Message");

    if (missingFields.length > 0) {
        result.innerHTML = `Sorry, your email couldn't be sent. Please fill in the following fields: ${missingFields.join(", ")}`;
        result.style.color = "red";
        return; 
    }

    result.innerHTML = "Please wait....";
    let response = await getEmailResult();

    if (response && response.status == 200) {
        result.innerHTML = "Email successfully sent!";
    } else {
        result.innerHTML = "Sorry, your email couldn't be sent.";
    }
};

const getEmailResult = async () => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    object.access_key = "817cffc5-dfd0-4c25-8906-e6530a0c8308"; 
    const json = JSON.stringify(object);
    
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });

        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
};

document.getElementById("contact-form").onsubmit = EmailResult;
