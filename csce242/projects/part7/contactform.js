const form = document.getElementById('contactForm');
const result = document.getElementById('responseMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    object.access_key = "17cffc5-dfd0-4c25-8906-e6530a0c8308";
    const json = JSON.stringify(object);

    result.style.display = "block";
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.ok) {
            result.innerHTML = json.message;
            result.className = "Message successfully sent";
        } else {
            result.innerHTML = json.message;
            result.className = "Sorry, your message was not sent";
        }
    })
    .catch(error => {
        console.error(error);
        result.innerHTML = "Something went wrong. Please try again!";
        result.className = "message error";
    })
    .then(() => {
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    });
});
