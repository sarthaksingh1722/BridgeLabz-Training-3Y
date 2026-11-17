"use strict";

// Get form
const studentForm = document.getElementById("studentForm");

// Get input fields
const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const phoneInput = document.getElementById("phone");

const passwordInput = document.getElementById("password");

// Function to show validation result
function showError(input, errorId, message) {

    const errorElement = document.getElementById(errorId);

    input.style.border = "2px solid red";

    errorElement.textContent = message;

    errorElement.style.color = "red";
}

function showSuccess(input, errorId) {

    const errorElement = document.getElementById(errorId);

    input.style.border = "2px solid green";

    errorElement.textContent = "Valid";

    errorElement.style.color = "green";
}

// Form submission
studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let isValid = true;

    // Regular expressions
    const nameRegex = /^[A-Za-z ]+$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex = /^[0-9]{10}$/;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

    // Name validation
    if (!nameRegex.test(nameInput.value.trim())) {

        showError(nameInput, "nameError", "Only alphabets allowed");

        isValid = false;

    } else {

        showSuccess(nameInput, "nameError");
    }

    // Email validation
    if (!emailRegex.test(emailInput.value.trim())) {

        showError(emailInput, "emailError", "Invalid email address");

        isValid = false;

    } else {

        showSuccess(emailInput, "emailError");
    }

    // Phone validation
    if (!phoneRegex.test(phoneInput.value.trim())) {

        showError(phoneInput, "phoneError", "Enter exactly 10 digits");

        isValid = false;

    } else {

        showSuccess(phoneInput, "phoneError");
    }

    // Password validation
    if (!passwordRegex.test(passwordInput.value)) {

        showError(
            passwordInput,
            "passwordError",
            "Password needs uppercase, number and special character"
        );

        isValid = false;

    } else {

        showSuccess(passwordInput, "passwordError");
    }

    // Final result
    const result = document.getElementById("result");

    if (isValid) {

        result.textContent = "Registration Successful!";

        result.style.color = "green";

    } else {

        result.textContent = "Please correct the errors.";

        result.style.color = "red";
    }

});