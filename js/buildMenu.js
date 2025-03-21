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
const customMenuList = document.getElementById('custom-menu-list');
const totalDisplay = document.getElementById('total');
const clearButton = document.getElementById('clear-custom-menu');

//Getting the + icons to turn them into buttons
const iconBtns = document.querySelectorAll('#modal-menu-display ul li i');

//For calculating total cost of meals and displaying it
let total = 0;
const updateTotal = (amount) => {
    total += amount;
    totalDisplay.textContent = total;
}

//Adds menu items to the custom menu list
const addMenuItem = (li) => {
    //Clones list item
    const clone = li.cloneNode(true);
    //Get price
    const price = parseFloat(clone.querySelector('span').textContent);
    //Get icon to turn it into an X instead of +
    const icon = clone.querySelector('i');
    icon.classList.add('remove-icon');
    //Changes the icon "button"´s function to remove the item from the list
    icon.addEventListener('click', () => {
        clone.remove();
        total -= price;
        totalDisplay.textContent = total;
    });
    //Adds the selected menu item to custom list and updates total
    customMenuList.appendChild(clone);
    updateTotal(price);
}

//Adding event listeners to the icons
iconBtns.forEach(icon => {
    icon.addEventListener('click', () => {
        //Get parent li element
        const li = icon.parentElement;
        //Add a copy of it to custom menu
        addMenuItem(li);
    })
});
//Clears all menu items from customers list
document.addEventListener('DOMContentLoaded', () => {
    clearButton.addEventListener('click', () => {
        customMenuList.innerHTML = '';
        total = 0;
        totalDisplay.textContent = total;
    });
});