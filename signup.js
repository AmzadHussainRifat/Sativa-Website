document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();
    


    // Get form field values
    const email = document.querySelector('.name1').value;
    const password = document.querySelector('.name2').value;
    const confirmPassword = document.querySelector('.email').value;
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
        errorDiv.textContent = 'Password must be at least 8 characters long and complex. e.g(Example@123)';
        return;
    }

    // Validate that password and confirm password match
    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match. Please re-enter the same password.';
        return;
    }

    // Save email and password to local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    const user = { name: email };
    setCookie('session', JSON.stringify(user), 1);

    // Redirect to the index.html page
    window.location.href = 'index.html';

});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

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

