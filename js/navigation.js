//Functionality for opening and closing mobile menu + applying box-shadow on scroll.

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('header');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        header.classList.toggle('menu-open');
    });
    // Close menu when a nav link is clicked
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
            mainNav.classList.remove('open');
            header.classList.remove('menu-open');
            }
        });
    })

    // Scroll class toggles box-shadow on menu
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50 ) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    })

});