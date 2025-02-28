const url = "reviews.json";

const fetchReviews = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        console.log("Fetched Data:", data);

        return Array.isArray(data.reviews) ? data.reviews : [];
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return [];
    }
};

const displayReviews = async () => {
    const data = await fetchReviews();
    
    if (!Array.isArray(data)) {
        console.error("Error: Expected an array but got", typeof data);
        return;
    }

    const reviewsContainer = document.querySelector(".game-reviews");
    reviewsContainer.innerHTML = ""; 

    data.forEach(game => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        reviewElement.innerHTML = `
            <a href="${game.external_link}">
                <img src="images/${game.img_name}" alt="${game.title}">
            </a>
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <a href="#">Read More</a>
        `;

        reviewsContainer.appendChild(reviewElement);
    });
};

displayReviews();