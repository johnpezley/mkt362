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
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
            </div>
        `;
    }

    // 2. Left Sidebar Navigation - DISABLED
    // Hiding left sidebar on all pages
    const sidebarNavElement = document.getElementById("sidebar-nav-component");
    if (sidebarNavElement) {
        sidebarNavElement.style.display = "none";
    }

    // 3. Right Sidebar - DISABLED
    // Hiding right sidebar on all pages
    const rightSidebarElement = document.getElementById("sidebar-right-component");
    if (rightSidebarElement) {
        rightSidebarElement.style.display = "none";
    }
});
