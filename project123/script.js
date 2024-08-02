document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservation-form');
    const reservationMessageSection = document.getElementById('reservation-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        const user = {
            name,
            email,
            time,
            guests
        };

        reservationMessageSection.innerHTML = `
            <h3>Thank you for your reservation, ${user.name}!</h3>
            <p>You have successfully reserved a table for ${user.guests} guest(s) at ${user.time}.</p>
            <p>We look forward to serving you!</p>
        `;
    });
});
