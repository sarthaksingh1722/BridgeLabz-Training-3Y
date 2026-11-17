"use strict";

// Create FormBuilder class
class FormBuilder {

    constructor(fields) {

        this.fields = fields;

        this.container = document.getElementById("formContainer");
    }

    // Generate dynamic form
    createForm() {

        let formHTML = `<form id="dynamicForm">`;

        // Generate input fields
        this.fields.forEach((field, index) => {

            formHTML += `
                <div>
                    <label>${field.label}</label>

                    <input
                        type="${field.type}"
                        id="field${index}"
                        placeholder="Enter ${field.label}"
                    >
                    <br><br>
                </div>
            `;
        });

        formHTML += `
            <button type="submit">Submit</button>
            </form>
        `;

        // Insert form into HTML
        this.container.innerHTML = formHTML;

        // Add submit event
        document.getElementById("dynamicForm")
            .addEventListener("submit", (event) => {

                event.preventDefault();

                const data = this.getFormData();

                document.getElementById("output").textContent =
                    JSON.stringify(data, null, 2);
            });
    }

    // Collect form data
    getFormData() {

        const formData = {};

        this.fields.forEach((field, index) => {

            const value = document.getElementById(`field${index}`).value;

            formData[field.label] = value;
        });

        return formData;
    }
}

// Define form fields
const fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" },
    { type: "number", label: "Age" }
];

// Create FormBuilder object
const formBuilder = new FormBuilder(fields);

// Generate form
formBuilder.createForm();