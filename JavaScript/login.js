const SignUpForm = document.getElementById('SignUpForm');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Function to show a success message
const showSuccessMessage = () => {
    alert('Login Successful!');
};

// Adding event listener to the Sign up form
SignUpForm.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

// Function to check form inputs
const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

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
        setError(password, 'Password must be at least 8 characters.');
    } else {
        success(password);
    }

    // Check if all inputs are valid and show success message
    if (emailValid(emailValue) && passwordValue.length >= 8) {
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
