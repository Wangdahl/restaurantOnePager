document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('open')) {
            mainNav.classList.remove('open');
            }
        });
    })
});