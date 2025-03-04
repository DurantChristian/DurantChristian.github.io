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

reviews.forEach(async(review) => {
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
    imglink.src = `images/${review.img_name}`; 
    img.src = `images/${review.img_name}`; 
    img.alt = review.title;
    imglink.appendChild(img);
    section.appendChild(imglink);
    section.append(img);

    const ul = document.createElement("ul");
    const details = [
    `Genre: ${review.genre}`,
    `Developer: ${review.developer}`,
    `Release Year: ${review.release_year}`,
    `Rating: ${review.rating}`,
];

    details.forEach((detail) => {
        const li = document.createElement("li");
        li.textContent = detail;
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
showReviews();