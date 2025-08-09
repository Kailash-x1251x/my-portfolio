// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Navbar fade on scroll
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        navbar.style.opacity = "0";
    } else {
        navbar.style.opacity = "1";
    }
    lastScrollY = window.scrollY;
});
