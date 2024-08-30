document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        form.reset();
    });
});
