document.addEventListener("DOMContentLoaded", () => {
    // 1. Render Header & Top Navigations
    const headerElement = document.getElementById("header-component");
    if (headerElement) {
        headerElement.innerHTML = `
            <div class="logo-box">
                <h1>Logo</h1>
            </div>
            <div class="header-right">
                <div class="info-graphics-bar">
                    This area is for informational graphics which describe in images what your site is about
                </div>
                <nav class="nav-bar-primary">
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
                <nav class="nav-bar-secondary">
                    <ul class="nav-links">
                        <li><a href="#">Secondary Link 1</a></li>
                        <li><a href="#">Secondary Link 2</a></li>
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
                <li><a href="#">Repositories</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
            
            <h3>Secondary navigation if needed</h3>
            <ul>
                <li><a href="#">Sub-item 1</a></li>
                <li><a href="#">Sub-item 2</a></li>
            </ul>
        `;
    }
});
