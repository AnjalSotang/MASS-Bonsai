// JavaScript code with modification to show success message

const feedbackForm = document.getElementById('FeedbackForm');
const fnameInput = document.getElementById('Fname');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const messageInput = document.getElementById('feedback');

// Adding event listener to the feedback form
feedbackForm.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

// Function to set error state for an input element
const setError = (element, errorMessage) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = errorMessage;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// Function to set success state for an input element
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Function to show a success message
const showSuccessMessage = () => {
    alert('Thank you for your feedback! Your message has been submitted successfully.');
};

// Function to check if an email address is valid
const isEmailValid = email => {
    const re = /^[^\s@]+@[^\s@]+\.(com|np)$/;
    return re.test(String(email).toLowerCase());
};

// Function to check form inputs
const validateInputs = () => {
    const fnameValue = fnameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const numberValue = numberInput.value.trim();
    const messageValue = messageInput.value.trim();

    // Validate Name input
    if (fnameValue === '') {
        setError(fnameInput, 'Full Name is required');
    } else {
        setSuccess(fnameInput);
    }

    // Validate email input
    if (emailValue === '') {
        setError(emailInput, 'Email is required');
    } else if (!isEmailValid(emailValue)) {
        setError(emailInput, 'Provide a valid email address');
    } else {
        setSuccess(emailInput);
    }

    // Validate number input
    if (numberValue === '') {
        setError(numberInput, 'Number is required');
    } else if (numberValue.length !== 10 || isNaN(numberValue)) {
        setError(numberInput, 'There must be 10 digits in the number');
    } else {
        setSuccess(numberInput);
    }

    // Validate feedback message input
    if (messageValue === '') {
        setError(messageInput, 'Enter your feedback');
    } else {
        setSuccess(messageInput);
    }

    // Check if all inputs are valid and show success message
    if (fnameValue !== '' && emailValue !== '' && isEmailValid(emailValue) && numberValue.length === 10 && !isNaN(numberValue) && messageValue !== '') {
        showSuccessMessage();
    }
};
