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