### Project Structure

webform-generator/
    |-- index.html         # Main HTML file
    |-- app.js             # JavaScript to dynamically generate the form
    |-- styles.css         # Styling for the form
    |-- formdata.json      # JSON file containing form structure configuration
    |-- Dockerfile         # Dockerfile to build the Nginx container
    |-- docker-compose.yml # Docker Compose configuration

### Prerequisites:
Docker
Docker Compose

###Getting Started
Clone the Repository:
```
git clone [repository_url] webform-generator
cd webform-generator
```

Build and Run the Docker Container:
```
docker-compose up --build
```

Access the Web Form:

Navigate to http://localhost:8080 in your web browser to view and interact with the dynamically generated form.

```
docker-compose down
```
Customizing the Form
To customize the form structure, modify the formdata.json file. The current implementation supports text, select, and checkbox form elements. Each form element can have properties like type, label, name, and placeholder (for text inputs) or options (for select dropdowns).

Contributing
Contributions are welcome! Please ensure that any changes made don't break the existing functionality and follow the code structure.

License
This project is open-source. Please ensure you mention the original author or source when redistributing or modifying.