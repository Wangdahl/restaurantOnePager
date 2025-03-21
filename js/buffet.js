//Functionality for hiding and showing more information about the buffet items.
// When the "More Info" heading is clicked, the cards will hide or show.

document.addEventListener('DOMContentLoaded', () => {
    const toggleHeading = document.getElementById('more-info');
    const icon = toggleHeading.querySelector('i');
    
    const buffetCards = document.querySelectorAll('.buffet__card');
    
    toggleHeading.addEventListener('click', () => {
        buffetCards.forEach(card => {
            // Toggle between 'hide' and 'show'
            if (card.classList.contains('hide')) {
            card.classList.remove('hide');
            card.classList.add('show');
            } else {
            card.classList.remove('show');
            card.classList.add('hide');
            }
        });
        
        // Toggle the "open" class on the heading so that the icon rotates.
        toggleHeading.classList.toggle('open');
    });
});
