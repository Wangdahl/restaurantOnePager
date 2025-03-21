// ------------------------------------------------------------
// Getting current date and time for reservation functionality
// ------------------------------------------------------------

const reservationDate = document.querySelector('input[type="date"]');
const reservationTime = document.querySelector('input[type="time"]');

//Adding one hour to the current time to set minimum time.
const currentDate = new Date(Date.now() + 60 * 60 * 1000);
const year = String(currentDate.getFullYear());
const maxYear = String(currentDate.getFullYear() + 1);
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const hour = String(currentDate.getHours()).padStart(2, '0');
const minute = String(currentDate.getMinutes()).padStart(2, '0');

const today = `${year}-${month}-${day}`;
const maxDate = `${maxYear}-${month}-${day}`;
const minTime = `${hour}:${minute}`;

reservationDate.setAttribute('min', today);
reservationDate.setAttribute('max', maxDate);
reservationDate.value = today;
reservationTime.setAttribute('min', (minTime));

// Ensuring correct default and minimum time is set depending on day and time.
if(Number(hour) >= 17) {
    reservationTime.value = minTime;
} else {
    reservationTime.value = '17:00';
}
reservationDate.addEventListener('change', () => {
    if(reservationDate.value === today) {
        if(Number(hour) >= 17) {
            reservationTime.setAttribute('min', (minTime));
        } else {
            reservationTime.setAttribute('min', '17:00');
        }
    } else {
        reservationTime.setAttribute('min', '17:00');
    }
});
// ------------------------------------------------------------
// Validating the form input fields
// ------------------------------------------------------------
const form = document.querySelector('.reserve__box__form');
const name = document.getElementById('form-name');
const email = document.getElementById('form-email');
const guests = document.getElementById('form-guests');
const date = document.getElementById('form-date');
const time = document.getElementById('form-time');

// Modal elements
const modal = document.getElementById('reservationModal');
const modalMessage = document.getElementById('modal-message');
const closeButton = document.getElementById('reservation-close');

//Form validation and modal trigger
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    //Clear previous errors
    [name, email, guests, date, time].forEach(field => {
        field.classList.remove('error');
        field.title = '';
    })
    if (!name.value.trim()) {
        valid = false;
        name.classList.add('error');
        name.value = '';
        name.placeholder = 'Enter your name.';
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        valid = false;
        email.classList.add('error');
        email.value = '';
        email.placeholder = 'Enter valid email.';
    }
    if (!guests.value || Number(guests.value) < 1) {
        valid = false;
        guests.classList.add('error');
        guests.value = '';
        guests.placeholder = 'Enter number of guests.';
    }
    if (!date.value) {
        valid = false;
        date.classList.add('error');
        date.value = '';
        date.placeholder = 'Enter valid date.';
    }
    if (!time.value) {
        time.classList.add('error');
        time.value = '';
        time.placeholder = 'Enter valid time.';
    }

    if(!valid) {
        event.preventDefault();
    } else {
        modalMessage.textContent = `Thank you for your reservation ${name.value}! See you on ${date.value} at ${time.value}.`;
        modal.style.display = 'block';
    }
});

// Close modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', () => {
    modal.style.display = 'none';
});