# Implement Configuration Loader for .env File

## Description:

Develop a configuration loader that reads the .env file and makes the API token available within the application.

This task ensures that the application is equipped with a robust configuration loader, enabling seamless access to the API token specified in the .env file throughout the codebase. Error handling mechanisms also contribute to the reliability of the configuration loading process.

## Acceptance Criteria:

- [ ] Configuration Loader:

    - [ ] Implement a configuration loader function/module that reads the .env file and loads its key-value pairs into the application.

    - [ ] Use a library like dotenv for handling the loading of environment variables.

- [ ] API Token Availability:

    - [ ] Ensure that the API token specified by the TOKEN_API key in the .env file is successfully loaded and available for use within the application.

- [ ] Integration with Application:

    - [ ] Integrate the configuration loader into the application\'s initialization process.

    - [ ] Confirm that the API token is accessible in the parts of the application where it is needed, such as services responsible for making API requests.

- [ ] Error Handling:

    - [ ] Implement appropriate error handling for cases where the .env file is missing or malformed.

    - [ ] Ensure that the application fails gracefully and provides meaningful error messages in such scenarios.

## Definition of Done:

- [ ] A configuration loader function/module is implemented.

- [ ] The loader successfully reads the .env file and loads its key-value pairs.

- [ ] The API token specified by the TOKEN_API key is available for use within the application.

- [ ] The configuration loader is seamlessly integrated into the application\'s initialization process.

- [ ] The application handles errors related to the absence or malformation of the .env file gracefully, providing meaningful error messages.

- [ ] The code is well-documented, adheres to coding standards, and includes comments where necessary.
