"use strict";

// Get form
const bookingForm = document.getElementById("bookingForm");

// Listen for form submission
bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get user input
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const seats = Number(document.getElementById("seats").value);

    // Validation patterns
    const nameRegex = /^[A-Za-z ]+$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate name
    if (!nameRegex.test(name)) {

        alert("Name should contain only alphabets.");

        return;
    }

    // Validate email
    if (!emailRegex.test(email)) {

        alert("Please enter a valid email.");

        return;
    }

    // Validate seats
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {

        alert("Seats must be between 1 and 10.");

        return;
    }

    // Create booking object
    const booking = {

        name: name,

        email: email,

        seats: seats
    };

    // Display booking details
    document.getElementById("result").innerHTML = `
        <h3>Booking Successful!</h3>

        <p>Name: ${booking.name}</p>

        <p>Email: ${booking.email}</p>

        <p>Seats: ${booking.seats}</p>

        <p>Status: Confirmed</p>
    `;

    console.log("Booking Details:", booking);

});