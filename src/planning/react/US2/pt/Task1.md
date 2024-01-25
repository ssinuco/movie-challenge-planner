# Create a Token API Integration for The Movie DB

## Description

Create an API token for [_The Movie Database_](https://developer.themoviedb.org/docs), and store it as a value for the TOKEN_API key in a src/.env file.

This task ensures secure and organized management of the API token, preventing it accidental exposure of it in Github and making it easily accessible within the application for API requests to The Movie DB.

## Acceptance Criteria:

- [ ] The Movie DB Account:

    - [ ] Create an account on The Movie DB platform to obtain API access.

- [ ] API Token Retrieval:

    - [ ] Access The Movie DB developer portal and generate an API key/token.

    - [ ] Verify that the API key/token provides access to the necessary endpoints, such as /discover/movie.

- [ ] Environment Variable:

    - [ ] Create a .env file at the root of the project.

    - [ ] Add a key-value pair `TOKEN_API=<Your-API-Token>` in the .env file, replacing `<Your-API-Token>` with the actual API token obtained.

- [ ] Secure Handling:

    - [ ] Ensure that the .env file is added to the project\'s .gitignore file to prevent accidental exposure of sensitive information.

## Definition of Done:

- [ ] An account on The Movie DB platform is created.

- [ ] An API key/token is generated and verified for access to The Movie DB API.

- [ ] The .env file is created at the root of the project with the TOKEN_API key and the actual API token.

- [ ] The .env file is added to the project\'s .gitignore file.
