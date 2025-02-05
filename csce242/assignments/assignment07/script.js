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
    let image1 = "https://fakeimg.pl/200x200/A6E3A1/909090";
    let image2 = "https://fakeimg.pl/200x200/C9CBFF/909090";

    imgElement.src = imgElement.src.includes(image1) ? image2 : image1;
}