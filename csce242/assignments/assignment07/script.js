document.querySelectorAll(".hello-card").forEach(card => {
    card.onclick = () => {
        console.log("Card Clicked!");
        const helloDiv = card.querySelector(".hello-text");
        const newHello = document.createElement("p");
        newHello.innerHTML = "Hello";
        helloDiv.appendChild(newHello);
    };
});

document.getElementById("colorPicker").oninput = (event) => {
    console.log("Color Selected:", event.target.value);
    document.querySelector(".star").style.color = event.target.value;
};

document.querySelector(".toggle-image").onclick = (event) => {
    console.log("Image Clicked!");
    const imgElement = event.target;
    const image1 = "https://fakeimg.pl/200x200/A6E3A1/909090";
    const image2 = "https://fakeimg.pl/200x200/C9CBFF/909090";

    imgElement.src = imgElement.src.includes(image1) ? image2 : image1;
};