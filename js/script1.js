
const nameField = document.getElementById('name1');
const surnameField = document.getElementById('name2');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('tel');
const countryField = document.getElementById('place');
 const form = document.getElementById('shape');
 const errorDiv = document.getElementById('error');

    form.addEventListener('submit', (e) => {
const errors = [];       

 errorDiv.textContent = '';// Clear previous error message

if (nameField.value.trim() === '')// Validation checks for forname
 {
 errors.push('* Please enter your forename.');
}

if (surnameField && surnameField.value.trim() === '')// Validation checks for surname field
 {
errors.push('* Please enter your surname.');
}

if (emailField && !validateEmail(emailField.value))// Validation checks for email
 {
 errors.push('* Please provide a valid email address.');
 }

if (phoneField && phoneField.value.trim() === '') // Validation checks for phone number field
{
 errors.push('* Please enter your phone number.');
}

if (countryField && countryField.value.trim() === '') // Validation checks for country name field
{
 errors.push('* Please enter your country.');
}
if (!validatePhoneNumber(phoneField.value))// Error message for wrong input in phone numer field
{errors.push('* Please enter a valid phone number with 11 digits.');
}

if (errors.length > 0)
{e.preventDefault(); // Display error messages and prevent form submission if there are errors

    errorDiv.innerHTML = errors.join('<br>');  // Join all errors into a single string
 }
});
//[Note: && operator is only used to check if the field exist before it is put for validation to prevent unnecessary error. :)]


function validateEmail(email) // Function to cheak for proper email format
{const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailPattern.test(email);
 }
 function validatePhoneNumber(phoneNumber) {
const phoneLength = 11; // number length check
const cleanedNumber = phoneNumber.replace(/\D/g, '');//cheack for intiger
return cleanedNumber.length === phoneLength;
}

const inputs = document.querySelectorAll('input');// Clear previous error message 
inputs.forEach(input => {
input.addEventListener('input', () => {
 errorDiv.textContent = '';
});
});


nameField.addEventListener('input', () => //prevents inputing invalid character in the user name field
{const value = nameField.value;
nameField.value = value.replace(/[^a-zA-Z]/g, '');
 });

surnameField.addEventListener('input', () => //prevents inputing invalid character in the user name field
{const value = surnameField.value;
 surnameField.value = value.replace(/[^a-zA-Z]/g, '');
  });



