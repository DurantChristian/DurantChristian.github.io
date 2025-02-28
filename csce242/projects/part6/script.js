const url = "reviews.json";

const fetchReviews = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.reviews || []; 
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return [];
    }
};

const displayReviews = async () => {
    const reviewsContainer = document.getElementById("game-reviews");
    reviewsContainer.innerHTML = ""; 

    const reviews = await fetchReviews();
    if (!Array.isArray(reviews)) {
        console.error("Expected an array but got:", typeof reviews);
        return;
    }

    reviews.forEach(game => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        reviewElement.innerHTML = `
            <a href="${game.external_link}">
                <img src="images/${game.img_name}" alt="${game.title}">
            </a>
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <p><strong>Category:</strong> ${game.categories.join(", ")}</p>
            <p><strong>Rating:</strong> ${game.rating}/10</p>
            <p><strong>Release Year:</strong> ${game.release_year}</p>
            <p><strong>Developer:</strong> ${game.developer}</p>
            <a href="#">Read More</a>
        `;

        reviewsContainer.appendChild(reviewElement);
    });

    console.log("Reviews displayed successfully!"); 
};

document.addEventListener("DOMContentLoaded", displayReviews);