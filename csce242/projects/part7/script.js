const toggleMenu = () => {
    document.getElementById("nav-items").classList.toggle("hidden");
};

const getReviews = async () => {
    const url = "https://durantchristian.github.io/csce242/projects/part6/reviews.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
};

const showReviews = async () => {
    const reviewsSection = document.getElementById("reviews-container");
    const reviews = await getReviews();

reviews.forEach(review => {
    const section = document.createElement("section");
    section.classList.add("review");
    reviewsSection.append(section);

    const h3 = document.createElement("h3");
    h3.innerText = review.title;
    section.append(h3);

    const img = document.createElement("img");
    const imglink = document.createElement("a");
    imglink.href = review.reference;
    imglink.target = "_blank"; 
    img.src = `images/${review.img_name}`; 
    img.alt = review.title;
    img.style.cursor = "pointer";
    imglink.appendChild(img);
    section.appendChild(imglink);

    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    const details = [
    `Genre: ${review.genre}`,
    `About: ${review.about}`,
    `Release Year: ${review.release_year}`,
    `Rating: ${review.rating}`,
];

    details.forEach((detail) => {
        const li = document.createElement("li");
        li.textContent = detail
        li.style.marginBottom = "10px";
        ul.append(li);
});

    section.append(ul);

    const link = document.createElement("a");
    link.href = review.external_link;
    link.innerText = "Read More";
    link.target = "_blank";
    section.append(link);
});
};

const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const resultMessage = document.getElementById("result");

    try {
        let response = await fetch(form.action, {
            method: "POST",
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
};

window.onload = () => {
    document.getElementById("toggle-nav").onclick = toggleMenu;
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
    showReviews();
};