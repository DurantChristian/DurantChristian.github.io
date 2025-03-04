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
    let gameReviews = await getReviews();

    let reviewsContainer = document.getElementById("reviews-container");

    reviewsContainer.innerHTML = "";

    gameReviews.forEach((gamereview) => {
        reviewsContainer.append(getReviewItem(gamereview));
    });
};

const getReviewItem = (gamereview) => {
    let section = document.createElement("section");
    section.classList.add("reviews-container");

    let h3 = document.createElement("h3");
    h3.innerText = gamereview.title;
    section.append(h3);

    let img = document.createElement("img");
    img.src = `csce242/projects/part6/images/${gamereview.img_name}`; 
    img.alt = gamereview.title;
    section.append(img);

    let ul = document.createElement("ul");
    ul.append(getLi(`Genre: ${gamereview.genre}`));
    ul.append(getLi(`Developer: ${gamereview.developer}`));
    ul.append(getLi(`Release Year: ${gamereview.release_year}`));
    ul.append(getLi(`Rating: ${gamereview.rating}`));
    section.append(ul);

    let link = document.createElement("a");
    link.href = gamereview.external_link;
    link.innerText = "Read More";
    link.target = "_blank";
    section.append(link);

    section.append(getReview(gamereview.reviews));

    return section;
};

const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data.games;
    return li;
};

const getReview = (reviews) => {
    const section = document.createElement("section");
    reviews.forEach((review) => {
        const p = document.createElement("p");
        p.textContent = review;
        section.append(p);
    });

    return section;
};
window.onload = () => showReviews();