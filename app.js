// Fetch the JSON form data and generate the form
function fetchFormData() {
    fetch('formdata.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => {
            generateForm(data);
        })
        .catch(error => {
            console.error("Error fetching the JSON data:", error);
        });
}

// Helper function to create individual form elements
function createFormElement(data) {
    let element;
    switch (data.type) {
        case 'text':
            element = document.createElement('input');
            element.type = 'text';
            element.name = data.name;
            element.placeholder = data.placeholder;
            break;
        case 'select':
            element = document.createElement('select');
            element.name = data.name;
            for (let option of data.options) {
                let optionElement = document.createElement('option');
                optionElement.textContent = option;
                optionElement.value = option;
                element.appendChild(optionElement);
            }
            break;
        case 'checkbox':
            element = document.createElement('input');
            element.type = 'checkbox';
            element.name = data.name;
            break;
        // ... add other input types as needed
        default:
            console.error("Unsupported form element type:", data.type);
            break;
    }

    // Check if the element is required
    if (data.required) {
        element.required = true;
    }

    return element;
}


// Function to generate the form based on the fetched JSON data
function generateForm(jsonData) {
    const formContainer = document.getElementById('formContainer');
    const form = document.createElement('form');

    for (let field of jsonData) {
        const label = document.createElement('label');
        label.textContent = field.label + ': ';
        const element = createFormElement(field);
        form.appendChild(label);
        form.appendChild(element);
        form.appendChild(document.createElement('br'));  // Add a line break for layout purposes
    }

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Submit';
    form.appendChild(submitBtn);

    formContainer.appendChild(form);
}

// Invoke the fetchFormData function when the window loads
window.onload = fetchFormData;
