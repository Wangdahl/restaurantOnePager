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