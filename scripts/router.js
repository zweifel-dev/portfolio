// Valid pages for routing
const validPages = ['home', 'about', 'contact', 'projects', 'reflections', 'research', 'day_trading_journey', 'experity_analytic_assessment', 'ma_feature_parity', 'delta_framework_implementation', 'enterprise_data_transformation', 'ma_integration_strategy', 'team_scaling_leadership'];

// Page metadata for SEO and dynamic titles
const pageMetadata = {
    home: { title: 'Home - Brandon Zweifel', description: 'Portfolio of Brandon Zweifel - Software Engineer and Technical Leader' },
    about: { title: 'About - Brandon Zweifel', description: 'Learn more about Brandon Zweifel\'s background, skills, and experience' },
    contact: { title: 'Contact - Brandon Zweifel', description: 'Get in touch with Brandon Zweifel' },
    projects: { title: 'Projects - Brandon Zweifel', description: 'Browse Brandon Zweifel\'s portfolio projects and case studies' },
    reflections: { title: 'Reflections - Brandon Zweifel', description: 'Thoughts and reflections on technology and leadership' },
    research: { title: 'Research - Brandon Zweifel', description: 'Research projects and academic work by Brandon Zweifel' },
    day_trading_journey: { title: 'Day Trading Journey - Brandon Zweifel', description: 'Strategic analysis and data-driven approach to day trading research' },
    experity_analytic_assessment: { title: 'Experity Analytics - Brandon Zweifel', description: 'Case study on Experity analytic assessment project' },
    ma_feature_parity: { title: 'MA Feature Parity - Brandon Zweifel', description: 'Case study on MA feature parity project' },
    delta_framework_implementation: { title: 'DELTA Framework Implementation - Brandon Zweifel', description: 'Comprehensive case study on DELTA framework organizational transformation at Experity' },
    enterprise_data_transformation: { title: 'Enterprise Data Transformation - Brandon Zweifel', description: 'Modern data stack migration and infrastructure modernization case study' },
    ma_integration_strategy: { title: 'M&A Integration Strategy - Brandon Zweifel', description: '$125M+ cost savings through strategic data integration and platform consolidation' },
    team_scaling_leadership: { title: 'Team Scaling & Leadership - Brandon Zweifel', description: 'Building high-performance data teams from 15 to 65+ professionals' }
};

document.addEventListener("DOMContentLoaded", function () {
    // Show initial loading state
    showLoading();
    
    // Load navbar first
    loadHTML("views/nav.html", "#navbar-placeholder")
        .then(() => {
            // Get the requested page from the URL (e.g., ?page=about)
            const params = new URLSearchParams(window.location.search);
            let page = params.get("page") || "home"; // Default to "home"
            
            // Validate page parameter
            if (!validPages.includes(page)) {
                console.warn(`Invalid page requested: ${page}, defaulting to home`);
                page = "home";
                // Update URL without reloading
                window.history.replaceState({}, '', '?page=home');
            }
            
            // Update page metadata
            updatePageMetadata(page);
            
            // Load the requested page
            return loadHTML(`views/${page}.html`, "#content");
        })
        .then(() => {
            hideLoading();
            // Initialize page-specific JavaScript
            initializePageScripts();
        })
        .catch(error => {
            hideLoading();
            showErrorPage(error);
        });
});

function loadHTML(url, target) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const targetElement = document.querySelector(target);
            if (!targetElement) {
                throw new Error(`Target element ${target} not found`);
            }
            targetElement.innerHTML = data;
            // Trigger lazy loading for any images in the new content
            lazyLoadImages();
        })
        .catch(error => {
            console.error(`Error loading ${url}:`, error);
            throw error; // Re-throw to handle in calling function
        });
}

function updatePageMetadata(page) {
    const metadata = pageMetadata[page] || pageMetadata.home;
    document.title = metadata.title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
    }
    metaDescription.content = metadata.description;
}

function showLoading() {
    const content = document.querySelector('#content');
    if (content) {
        content.innerHTML = `
            <div class="d-flex justify-content-center align-items-center" style="min-height: 400px;">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `;
    }
}

function hideLoading() {
    // Loading is automatically hidden when content is loaded
}

function showErrorPage(error) {
    const content = document.querySelector('#content');
    if (content) {
        content.innerHTML = `
            <div class="container-fluid mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card bg-dark text-white">
                            <div class="card-body text-center">
                                <h1 class="text-danger">Error Loading Page</h1>
                                <p class="mt-3">${error.message}</p>
                                <a href="?page=home" class="btn btn-primary mt-3">Return to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function initializePageScripts() {
    // Re-initialize any page-specific scripts after dynamic content load
    if (typeof initializeSmoothScrolling === 'function') {
        initializeSmoothScrolling();
    }
    if (typeof initializeFadeInEffects === 'function') {
        initializeFadeInEffects();
    }
}

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}
