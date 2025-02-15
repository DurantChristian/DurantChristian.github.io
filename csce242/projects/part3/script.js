//toggling the nav
const toggleMenu = () => {
    const menu = document.getElementById("nav-items");
    menu.classList.toggle("hidden");
};
document.getElementById("toggle-nav").onclick = toggleMenu;