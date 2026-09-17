document.addEventListener("DOMContentLoaded", () => {
    // 1. Render Header & Top Navigations
    const headerElement = document.getElementById("header-component");
    if (headerElement) {
        headerElement.innerHTML = `
            <div class="logo-box">
                <h1>JP</h1>
            </div>
            <div class="header-right">
                <nav class="nav-bar-primary">
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="docs.html">Documentation</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contect With Us</a></li>
                    </ul>
                </nav>
            </div>
        `;
    }

    // 2. Render Left Sidebar Navigation
    const sidebarNavElement = document.getElementById("sidebar-nav-component");
    if (sidebarNavElement) {
        sidebarNavElement.innerHTML = `
            <h3>Primary Navigation</h3>
            <ul>
                <li><a href="index.html">Dashboard</a></li>
                <li><a href="repositories.html">Repositories</a></li>
                <li><a href="settings.html">Settings</a></li>
            </ul>
        `;
    }

    // 3. Keep the privacy link consistent in every page footer.
    document.querySelectorAll(".footer-links a:first-child").forEach((privacyLink) => {
        privacyLink.href = "privacy.html";
        privacyLink.textContent = "Privacy Statement";
    });

    // 4. Remove placeholder links that do not lead anywhere.
    // Keep real page links and in-page anchors such as #installation intact.
    document.querySelectorAll('a[href="#"], a[href=""], a[href="javascript:void(0)"]').forEach((placeholderLink) => {
        const replacement = document.createElement("span");
        replacement.innerHTML = placeholderLink.innerHTML;
        replacement.className = placeholderLink.className;
        replacement.style.cssText = placeholderLink.style.cssText;
        replacement.setAttribute("aria-disabled", "true");
        placeholderLink.replaceWith(replacement);
    });
});
