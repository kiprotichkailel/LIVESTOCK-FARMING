// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').innerHTML = `<p>Thank you, ${name}. Your message has been sent!</p>`;
    } else {
        document.getElementById('responseMessage').innerHTML = `<p>Please fill in all fields before submitting.</p>`;
    }

    // Clear form fields after submission
    document.getElementById('contactForm').reset();
});
