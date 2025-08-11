// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Hamburger Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Navbar fade in/out on scroll
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // scrolling down
        navbar.style.opacity = "0";
    } else {
        // scrolling up
        navbar.style.opacity = "1";
    }
    lastScrollY = window.scrollY;
});
