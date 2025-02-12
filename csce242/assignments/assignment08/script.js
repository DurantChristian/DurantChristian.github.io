const toggleMenu = () => {
    const menu = document.getElementById("nav-items");
    const toggle = document.getElementById("toggle-nav");
    menu.classList.toggle("hidden");
    toggle.textContent = menu.classList.contains("hidden") ? "▼" : "▲";
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
        img.src = "/"; 
        img.alt = `Image of a ${transport}`;
    } else {
        img.src = "";
        img.alt = "";
    }
};

const changeHeartColor = (color) => {
    document.getElementById("heart").style.backgroundColor = color;
};

document.getElementById("btn-red").onclick = () => changeHeartColor("red");
document.getElementById("btn-green").onclick = () => changeHeartColor("green");
document.getElementById("btn-blue").onclick = () => changeHeartColor("blue");