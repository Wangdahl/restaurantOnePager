// Dark / light mode toggle functionality
// Code based on blog post by Andy Bell - https://piccalil.li/blog/create-a-user-controlled-dark-or-light-mode/ 
// and FreeCodeCamp's YouTube - https://www.youtube.com/watch?v=krfUjg0S2uI&list=PLWKjhJtqVAbmMuZ3saqRIBimAKIMYkt0E&index=7&t=25262s&ab_channel=freeCodeCamp.org


document.addEventListener('DOMContentLoaded', () => {
    const darkBtn = document.getElementById('dark');
    const lightBtn = document.getElementById('light');
    const storedTheme = localStorage.getItem('theme');

    if(storedTheme) {
        document.documentElement.setAttribute('data-theme', storedTheme);
        if(storedTheme === 'light') {
            lightBtn.checked = true;
        } else if(storedTheme === 'dark') {
            darkBtn.checked = true;
        }
    } else {
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            darkBtn.checked = true;
        } else {
            document.documentElement.setAttribute('data-thme', 'light');
            lightBtn.checked = true;
        }
    }
    darkBtn.addEventListener('click', () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkBtn.checked = true;
    });
    lightBtn.addEventListener('click', () => {
        document.documentElement.setAttribute('data-theme', 'light');
        lightBtn.checked = true;
    });
});