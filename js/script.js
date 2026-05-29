document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('navigation');
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('nav-open');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Close menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-open');
            document.body.classList.remove('no-scroll');
        });
    });
});
