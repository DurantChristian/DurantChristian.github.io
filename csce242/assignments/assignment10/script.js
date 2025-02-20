const images = {
    "Happy Birthday": "/csce242/assignments/assignment10/images/birthday.jpg",
    "Crazy Clown": "/csce242/assignments/assignment10/images/clown.jpg",
    "It's Raining": "/csce242/assignments/assignment10/images/rain.jpg",
    "Quiet Time": "/csce242/assignments/assignment10/images/read.jpg",
    "Working Hard": "/csce242/assignments/assignment10/images/shovel.jpg",
    "Work from Home": "/csce242/assignments/assignment10/images/work.jpg"
};

const titlesContainer = document.getElementById("titlesContainer");

Object.keys(images).forEach(title => {
    let div = document.createElement("div");
    div.classList.add("title");
    div.textContent = title;
    div.onclick = () => openPopup(title, images[title]);
    titlesContainer.appendChild(div);
});

const openPopup = (title, imgSrc) => {
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupImage").src = imgSrc;
    document.getElementById("popup").style.display = "block";
};

const closePopup = () => document.getElementById("popup").style.display = "none";