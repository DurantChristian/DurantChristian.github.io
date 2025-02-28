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
    let reviewscontainer = document.getElementById("reviews-container")

    gameReviews.forEach((gamereview) => {
        reviewsSection.append(getReviewItem(gamereview));
    });
};

const getReviewItem = (gamereview) => {
    let section = document.createElement("section");
    let h3 = document.createElement("h3");
    h3.innerText = gamereview.title;
    section.append(h3);
    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(gamereview.img_name));
    ul.append(getLi(gamereview.features));
    ul.append(getLi(gamereview.genre));
    ul.append(getLi('Rating: ${gamereview.rating}'));
    ul.append(getLi(gamereview.developer));
    ul.append(getLi(gamereview.release_year));
    ul.append(getLi(gamereview.external_link));

    section.append(getReview(gamereview.reviews));

    return section;
};
const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
};

const getReview = (reviews) => {
    const section = document.createElement("section");
    reviews.forEach(review =>{
        const p = document.createElement("p");
        p.textContent = review;
        section.append(p);
    });

    return section;
};

window.onload = () => showReviews();