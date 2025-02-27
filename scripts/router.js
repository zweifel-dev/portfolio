document.addEventListener("DOMContentLoaded", function () {
    loadHTML("views/nav.html", "#navbar-placeholder");  // Load Navbar
    
    // Get the requested page from the URL (e.g., ?page=about)
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home"; // Default to "home"

    // Load the requested page
    loadHTML(`views/${page}.html`, "#content");
});

function loadHTML(url, target) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            document.querySelector(target).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}
