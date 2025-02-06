//do stuff when button clicked
document.getElementById("btn-click.me").onclick = () => {
    console.log("WOW!");
    document.getElementById("result").innerHTML="Hi Chris";
};

//change color
document.getElementById("btn-color").onclick = () => {
    console.log("Hello world");
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Good bye";
    messageP.classList.toggle("sad");
}

//happy script
document.getElementById("btn-happy").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("happy");
    displayP.innerHTML = "Good Times";
};

//sad sccript
document.getElementById("btn-sad").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("sad");
    displayP.innerHTML = "Bad Times";
}

document.getElementById("btn-clear").onclick = () => {
    document.getElementById("display").classList.add("hidden");
};

document.getElementById("textbox").onkeydown = (event) => {
    //const emotion = document.getElementById("textbox").value;
    const emotion = event.currentTarget.value;
    console.log(emotion);
    document.getElementById("emotional-message").innerHTML = "You are very " + event.currentTarget.value;
}