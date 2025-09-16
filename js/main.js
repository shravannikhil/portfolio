/* ==================== SHOW MENU ==================== */
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Function to show the menu
const showMenu = () => {
    navMenu.classList.toggle('show-menu');
};

// Add event listener to the toggle button
if (navToggle) {
    navToggle.addEventListener('click', showMenu);
}

// Function to close the menu when a link is clicked
const linkAction = () => {
    navMenu.classList.remove('show-menu');
};

// Add event listener to each nav link
navLinks.forEach(link => link.addEventListener('click', linkAction));