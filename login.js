document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get form field values
    const email = document.querySelector('.name1').value.trim();
    const password = document.querySelector('.name2').value.trim();

    // Clear previous errors
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = '';

    // Validate email
    if (!validateEmail(email)) {
        errorDiv.textContent = 'Please enter a valid email address.';
        return;
    }

    // Validate password complexity
    if (!validatePasswordComplexity(password)) {
        errorDiv.textContent = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        return;
    }

    // Save email and password to local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // If both fields are valid, set the cookie
    const user = { name: email };
    setCookie('session', JSON.stringify(user), 1);

    // Redirect to the index.html page
    window.location.href = 'index.html';
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate password complexity
function validatePasswordComplexity(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return re.test(password);
}

// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
