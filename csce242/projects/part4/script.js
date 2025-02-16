//toggling the nav
const toggleMenu = () => {
    document.getElementById("nav-items").classList.toggle("hidden");
};
window.onload = () => {
    document.getElementById("toggle-nav").onclick = toggleMenu;
};