# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for Brandon Zweifel built as a single-page application (SPA) using vanilla JavaScript with client-side routing. The site is hosted on GitHub Pages at zweifel.tech.

## Architecture

### Core Structure
- **Single-page application** with client-side routing via query parameters (`?page=pagename`)
- **Router** (`scripts/router.js`): Handles page navigation, validation, and dynamic content loading
- **Views** (`views/`): Individual HTML pages loaded dynamically into the main index.html
- **Styles** (`styles/`): CSS files including Bootstrap customizations and page-specific styles
- **Static Files** (`files/`): PDFs and documents available for download

### Key Components
- `index.html`: Main entry point that loads router and provides content container
- `scripts/router.js`: Client-side router managing page navigation and metadata
- `scripts/page.js`: Additional page initialization scripts
- `views/nav.html`: Navigation component loaded into all pages
- `views/*.html`: Individual page content (home, about, projects, etc.)

### Routing System
Valid pages are explicitly defined in `router.js`:
- home, about, contact, projects, reflections, research
- Case studies: day_trading_journey, experity_analytic_assessment, ma_feature_parity, delta_framework_implementation, enterprise_data_transformation, ma_integration_strategy, team_scaling_leadership

## Development

### Local Development Server
```bash
# Start local server (Python 3)
python3 -m http.server 8000

# Then navigate to http://localhost:8000
```

### Adding New Pages
1. Create new HTML file in `views/` directory
2. Add page name to `validPages` array in `scripts/router.js`
3. Add metadata to `pageMetadata` object in `scripts/router.js`
4. Update navigation in `views/nav.html` if needed

### Deployment
The site is deployed via GitHub Pages. Any commits to the main branch are automatically deployed to zweifel.tech (configured via CNAME file).

## CSS Framework
- Bootstrap 5.3.0 loaded via CDN
- Font Awesome 6.4.2 for icons
- Custom styles in `styles/tech.css`, `styles/nav.css`, `styles/projects.css`

## Important Files
- `CNAME`: Contains domain configuration for GitHub Pages
- `robots.txt`: Search engine crawling rules
- `sitemap.xml`: Site map for SEO
- `site.webmanifest`: PWA manifest configuration