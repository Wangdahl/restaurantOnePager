// ------------------------------------------------------------
// Modal popup funcitonality
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const buildBtn = document.getElementById('build-menu-btn');
    const menuModal = document.getElementById('menuModal');
    const closeMenuBtn = document.getElementById('menu-modal-close')
    //Open modal
    buildBtn.addEventListener('click', (event) => {
        event.preventDefault();
        menuModal.style.display = 'block';
    });
    //Close modal

    closeMenuBtn.addEventListener('click', () => {
        menuModal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === menuModal) {
            menuModal.style.display = 'none';
        }
    });
});
// ------------------------------------------------------------
// Create menu and calculate cost
// ------------------------------------------------------------
