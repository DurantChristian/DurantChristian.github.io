const EmailResult = async (e) => {
    e.preventDefault();

    const result = document.getElementById("result");
    const form = document.getElementById("contact-form");

    if (!form.checkValidity()) {
        result.innerHTML = "Sorry, your email couldn't be sent. Please fill in all required fields.";
        result.style.color = "red";
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
