const menuBar = document.getElementById("menu-btn");
const navLink = document.getElementById("nav-link");

menuBar.addEventListener("click", () => {
  navLink.classList.toggle("hidden");
});
