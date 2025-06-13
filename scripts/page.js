
function initializeSmoothScrolling() {
    // Smooth scrolling only for anchor links (starting with #), not for page routing
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });
}

function initializeStickyNavbar() {
    // Sticky navbar effect on scroll
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (navbar && window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else if (navbar) {
            navbar.classList.remove("scrolled");
        }
    });
}

function initializeFadeInEffects() {
    // Fade-in effect on scroll
    const fadeElements = document.querySelectorAll(".fade-in");
    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                element.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger animation on load
}

// Initialize all effects when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    initializeSmoothScrolling();
    initializeStickyNavbar();
    initializeFadeInEffects();
});

// Export functions for router.js to use after dynamic content loading
window.initializeSmoothScrolling = initializeSmoothScrolling;
window.initializeFadeInEffects = initializeFadeInEffects;