document.addEventListener('DOMContentLoaded', () => {
  // Navigation Configuration Data
  const navItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const brandName = 'AM.';
  const navContainer = document.getElementById('navbar');

  if (!navContainer) return;

  // Build Navigation DOM
  const navElement = document.createElement('nav');

  // Brand / Logo
  const logoLink = document.createElement('a');
  logoLink.className = 'logo';
  logoLink.href = '#';
  logoLink.textContent = brandName;
  navElement.appendChild(logoLink);

  // Navigation Links List
  const ulElement = document.createElement('ul');
  ulElement.className = 'nav-links';

  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    li.appendChild(a);
    ulElement.appendChild(li);
  });

  navElement.appendChild(ulElement);
  navContainer.appendChild(navElement);
});
