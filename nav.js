document.addEventListener("DOMContentLoaded", () => {
    // 1. Render Header & Top Navigations
    const headerElement = document.getElementById("header-component");
    if (headerElement) {
        headerElement.innerHTML = `
            <div class="logo-box">
                <h1>JP</h1>
            </div>
            <button class="hamburger-menu" id="hamburger-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="header-right">
                <nav class="nav-bar-primary">
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="docs.html">Documentation</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact With Us</a></li>
                    </ul>
                </nav>
            </div>
        `;
        
        // Add hamburger menu functionality
        const hamburgerBtn = document.getElementById("hamburger-btn");
        const headerRight = document.querySelector(".header-right");
        
        hamburgerBtn.addEventListener("click", () => {
            headerRight.classList.toggle("active");
            hamburgerBtn.classList.toggle("active");
        });
        
        // Close menu when a link is clicked
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                headerRight.classList.remove("active");
                hamburgerBtn.classList.remove("active");
            });
        });
    }
    
    // 2. Render Left Sidebar Navigation
    const sidebarNavElement = document.getElementById("sidebar-nav-component");
    if (sidebarNavElement) {
        sidebarNavElement.innerHTML = `
            <h3>Primary Navigation</h3>
            <ul>
                <li><a href="index.html">Dashboard</a></li>
                <li><a href="#">Repositories</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        `;
    }
});
