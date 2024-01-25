# Implement Movie Data Transformation Function

## Description

Create a file `transformers.ts` into `src/utils` folder. Create a function named `formatMovie` within that file. This function will handle the transformation of API movie data to the business model Movie.

By creating a dedicated file for transformers and the `formatMovie` function, this task ensures a modular and organized approach to data transformation within the project.

## Acceptance Criteria:

- [ ] File and Folder Structure:

    - [ ] Ensure the existence of a utils folder within the src directory.

    - [ ] Create a file named `transformers.ts` within the utils folder.

- [ ] `formatMovie` Function:

    - [ ] Implement a function named `formatMovie` within the `transformers.ts` file.

    - [ ] The function should take an API movie data object as a parameter and return a business model object Movie.

    - [ ] Map relevant fields from the API data to the corresponding fields in the business model Movie.

    - [ ] Handle any necessary data conversions or transformations to ensure consistency.

- [ ] Unit Testing:

    - [ ] Write unit tests for the `formatMovie` function in `transformers.spec.ts` file into the `src/utils` folder.

    - [ ] Test the function with various types of API movie data to ensure correct transformation.

    - [ ] Include tests for edge cases and potential errors.

## Definition of Done:

- [ ] The utils folder is created within the src directory.

- [ ] The `transformers.ts` file is created within the utils folder.

- [ ] The `formatMovie` function is implemented and successfully transforms API movie data to the business model Movie.

- [ ] Unit tests for the `formatMovie` function pass successfully, covering various scenarios.

- [ ] The code adheres to coding standards, is well-documented, and includes comments where necessary.
