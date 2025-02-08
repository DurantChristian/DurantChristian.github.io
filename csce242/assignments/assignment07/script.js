document.getElementById(".hello-card").forEach(card => {
    card.onclick = () => {
        console.log("Card Clicked!");
        const helloDiv = card.getElementById(".hello-text");
        const newHello = document.createElement("p");
        newHello.innerHTML = "Hello";
        helloDiv.appendChild(newHello);
    };
});

document.getElementById("colorPicker").oninput = (event) => {
    console.log("Color Selected:", event.target.value);
    document.getElementById(".star").style.color = event.target.value;
};

document.getElementById(".toggle-image").onclick = (event) => {
    console.log("Image Clicked!");
    const imgElement = event.target;
    const image1 = "https://fakeimg.pl/200x200/A6E3A1/909090";
    const image2 = "https://fakeimg.pl/200x200/C9CBFF/909090";

    imgElement.src = imgElement.src.includes(image1) ? image2 : image1;
};