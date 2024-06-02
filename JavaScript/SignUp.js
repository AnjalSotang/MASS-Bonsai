const SignUpForm = document.getElementById('SignUpForm');
const firstName = document.getElementById('Fname');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Function to show a success message
const showSuccessMessage = () => {
    alert('Sign Up is Successful!');
};

// Adding event listener to the Sign up form
SignUpForm.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

// Function to check form inputs
const validateInputs = () => {
    const FnameValue = firstName.value.trim();
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // Validate first name input
    if (FnameValue === '') {
        error(firstName, 'Username is required');
    } else {
        success(firstName);
    }

    // Validate full name input
    if (fullNameValue === '') {
        error(fullName, 'Full name is required');
    } else {
        success(fullName);
    }

    // Validate email input
    if (emailValue === '') {
        error(email, 'Email is required');
    } else if (!emailValid(emailValue)) {
        error(email, 'Provide a valid email address');
    } else {
        success(email);
    }

    // Validate password input
    if (passwordValue === '') {
        error(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        error(password, 'Password must be at least 8 characters.');
    } else {
        success(password);
    }

    // Validate password confirmation input
    if (password2Value === '') {
        error(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        error(password2, "Passwords don't match");
    } else {
        success(password2);
    }

    // Check if all inputs are valid and show success message
    if (
        firstName.parentElement.classList.contains('success') &&
        fullName.parentElement.classList.contains('success') &&
        email.parentElement.classList.contains('success') &&
        password.parentElement.classList.contains('success') &&
        password2.parentElement.classList.contains('success')
    ) {
        showSuccessMessage();
    }
};

// Function to set error state for an input element
const error = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// Function to set success state for an input element
const success = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Function to check if an email address is valid
const emailValid = email => {
    const re = /^[^\s@]+@[^\s@]+\.(com|np)$/;
    return re.test(String(email).toLowerCase());
};
