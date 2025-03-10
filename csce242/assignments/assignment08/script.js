const toggleMenu = () => {
    const menu = document.getElementById("nav-items");
    const toggle = document.getElementById("toggle-nav");
    menu.classList.toggle("show");
    toggle.textContent = menu.classList.contains("show") ? "▼" : "▲";
};

const showSection = (section) => {
    document.getElementById("travel").classList.add("hidden");
    document.getElementById("picture").classList.add("hidden");
    document.getElementById(section).classList.remove("hidden");
};

document.getElementById("toggle-nav").onclick = toggleMenu;
document.getElementById("exercise1").onclick = () => showSection("travel");
document.getElementById("exercise2").onclick = () => showSection("picture");

document.getElementById("transportInput").onkeyup = (event) => {
    const transport = event.currentTarget.value.toLowerCase();
    const img = document.getElementById("transportImage");
    const validModes = ["bike", "scooter", "car", "skateboard"];
    if (validModes.includes(transport)) {
        img.src = `/csce242/assignments/assignment08/images/${transport}.png`; 
    } else {
        img.src = "";
    }
};

const changeHeartColor = (color) => {
    document.getElementById("heart").style.color = color;
};

document.getElementById("btn-red").onclick = () => changeHeartColor("red");
document.getElementById("btn-green").onclick = () => changeHeartColor("green");
document.getElementById("btn-blue").onclick = () => changeHeartColor("blue");