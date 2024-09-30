// script.js
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value;

    // Simple validation feedback
    if (!name || !email || !category || !message) {
        document.getElementById('responseMessage').textContent = 'All fields are required!';
        return;
    }

    // Normally, you would send this data to a server
    console.log({
        name,
        email,
        category,
        message
    });

    document.getElementById('responseMessage').textContent = 'Thank you for your feedback!';
    document.getElementById('feedbackForm').reset();
});
