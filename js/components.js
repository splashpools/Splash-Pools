/**
 * Global Components for Splash Pools
 * This script injects the Header and Footer into placeholders.
 * It works even when opening the HTML file directly (file:// protocol).
 */

const headerHTML = `
<header>
    <div class="content header-flex">
        <a href="index.html" class="logo-wrapper">
            <img src="img/logo.png" alt="Splash Pools Logo" class="logo-img">
        </a>
        <nav>
            <a class="nav-link" href="index.html">Home</a>
            <a class="nav-link" href="#">Services</a>
            <!--<a class="nav-link" href="#">Portfolio</a>
            <a class="nav-link" href="#">Testimonials</a>-->
            <a class="nav-link" href="contact-us.html">Contact</a>
            <a href="#contact" class="btn btn-primary">Get a Quote</a>
        </nav>
    </div>
</header>
`;

const footerHTML = `
<footer>
    <div class="max-w-1200 footer-grid">
        <div class="footer-section">
            <div class="logo-wrapper mb-10">
                <img src="img/logo-white.png" alt="Splash Pools Logo" class="logo-img">
            </div>
            <p class="text-muted" style="font-size: 0.875rem; line-height: 1.6; margin-bottom: 2rem;">
                Building premium aquatic experiences since 1998. Quality craftsmanship meets modern
                engineering in every project.
            </p>
            <div class="social-icons">
                <a href="#" class="social-btn"><span class="material-symbols-outlined"
                        style="font-size: 1.25rem;">public</span></a>
                <a href="#" class="social-btn"><span class="material-symbols-outlined"
                        style="font-size: 1.25rem;">share</span></a>
                <a href="#" class="social-btn"><span class="material-symbols-outlined"
                        style="font-size: 1.25rem;">thumb_up</span></a>
            </div>
        </div>

        <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Project Gallery</a></li>
                <li><a href="#">Service Areas</a></li>
                <li><a href="#">Financing Options</a></li>
                <li><a href="#">Maintenance Plans</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h4>Contact Us</h4>
            <ul class="footer-links">
                <li style="display: flex; gap: 0.75rem;"><span
                        class="material-symbols-outlined text-primary">location_on</span> 123 Paradise Way,
                    Coral Springs, FL 33065</li>
                <li style="display: flex; gap: 0.75rem;"><span
                        class="material-symbols-outlined text-primary">call</span> (555) 987-6543</li>
                <li style="display: flex; gap: 0.75rem;"><span
                        class="material-symbols-outlined text-primary">mail</span> hello@splashpools.com
                </li>
                <li style="display: flex; gap: 0.75rem;"><span
                        class="material-symbols-outlined text-primary">schedule</span> Mon - Fri: 8am - 6pm
                </li>
            </ul>
        </div>

        <div class="footer-section">
            <h4>Our Location</h4>
            <div style="width: 100%; height: 160px; border-radius: 0.75rem; overflow: hidden; filter: grayscale(1);">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZl85kPtptAGYgkSPR7qoltbl3I-iQacF2Mzb8cBe6poEILRB7ftY9yc9LWgoKXM380wpKxKjclSRuMLXdqOHNLEjTnLU_cGgb_yh85yr8CVfwYbdIWNhljhgjUN1YPsz6JP4x6pRle1HqLpkbFAvjOR3VCKesMndIENWs5A1yIwNN8fESphr1AxhISmtIygZ-dTzgVR81yiYwF_tNpjm332NMLSOXn9S7o1GfxjvMavmIB69rzMBQ1IsHar0KO4VMLpMFwlnHXg"
                    alt="Map" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
        </div>
    </div>

    <div class="max-w-1200"
        style="padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; color: var(--slate-400); font-size: 0.75rem;">
        <p>© 2026 Splash Pools & Construction Inc. All rights reserved.</p>
        <div style="display: flex; gap: 1.5rem;">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
        </div>
    </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});
