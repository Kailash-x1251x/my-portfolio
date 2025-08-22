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
    navbar.style.opacity = window.scrollY > lastScrollY ? "0" : "1";
    lastScrollY = window.scrollY;
});

// Manual & Auto-scroll Certificates
const certificatesContainer = document.getElementById("certificates-container");
const scrollLeftBtn = document.querySelector(".scroll-btn.left");
const scrollRightBtn = document.querySelector(".scroll-btn.right");

// Restart animation after manual scroll
function restartAutoScroll() {
    certificatesContainer.style.animation = "none";
    void certificatesContainer.offsetWidth; // Trigger reflow
    certificatesContainer.style.animation = "";
    certificatesContainer.style.animation = "scrollCertificates 25s linear infinite";
}

scrollLeftBtn.addEventListener("click", () => {
    certificatesContainer.scrollBy({ left: -250, behavior: "smooth" });
    restartAutoScroll();
});
scrollRightBtn.addEventListener("click", () => {
    certificatesContainer.scrollBy({ left: 250, behavior: "smooth" });
    restartAutoScroll();
});

// Image Modal Functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".modal .close");

document.querySelectorAll(".certificate-card img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});



// Contact form submission with on-page message (auto-fade)
const contactForm = document.querySelector("#contact form");

if (contactForm) {
    // Create a message container
    const messageDiv = document.createElement("div");
    messageDiv.style.marginTop = "10px";
    messageDiv.style.fontWeight = "bold";
    contactForm.appendChild(messageDiv);

    contactForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        // Show sending message
        messageDiv.textContent = "⏳ Sending...";
        messageDiv.style.color = "#007bff";
        messageDiv.style.opacity = "1"; // Ensure visible

        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            messageDiv.textContent = "✅ Thank you! Your message has been sent.";
            messageDiv.style.color = "green";
            form.reset();
        } else {
            messageDiv.textContent = "❌ Oops! There was a problem sending your message.";
            messageDiv.style.color = "red";
        }

        // Fade out after 5 seconds
        setTimeout(() => {
            messageDiv.style.transition = "opacity 1s ease";
            messageDiv.style.opacity = "0";
        }, 5000);
    });
}
