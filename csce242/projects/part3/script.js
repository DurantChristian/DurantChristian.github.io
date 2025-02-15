//toggling the nav
const toggleMenu = () => {
    const menu = document.getElementById("nav-items");
    menu.classList.toggle("show");
};
document.getElementById("toggle-nav").onclick = toggleMenu;