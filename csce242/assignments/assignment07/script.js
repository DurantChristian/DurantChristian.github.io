function addHello(card) {
    let helloDiv = card.querySelector('.hello-text');
    let newHello = document.createElement('p');
    newHello.textContent = 'Hello';
    helloDiv.appendChild(newHello);
}

document.getElementById("colorPicker").addEventListener("input", function () {
    document.querySelector(".star").style.color = this.value;
});

function changeImage(imgElement) {
    let image1 = "image1.jpg";
    let image2 = "image2.jpg";

    imgElement.src = imgElement.src.includes(image1) ? image2 : image1;
}