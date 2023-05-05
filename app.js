// Get all navigation links except the active ones
const navLinks = document.querySelectorAll('.nav-item:not(.active) .nav-link');

// Set the cursor style to pointer for each link
navLinks.forEach(link => {
    link.style.cursor = 'pointer';
});