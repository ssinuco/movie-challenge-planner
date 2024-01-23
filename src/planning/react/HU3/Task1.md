# Enhance `getMovies` Function for Pagination Support

## Description:

Enhance the `getMovies` service function to support pagination by receiving an object as a parameter with the structure `{ filters: { page: number } }`. This allows fetching data from the API with pagination parameters.

Now, the function should return a Promise resolving an object with the structure `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`. This is necessary to include in the output not only the array of movies but also the total number of pages.

This task ensures that the `getMovies` function is enhanced to support pagination, allowing for more flexible data fetching from the API with the ability to specify page numbers. The default pagination behavior is also implemented for ease of use.

## Acceptance Criteria:

- [ ] Parameter Structure:

    - [ ] Modify the `Home` function to accept an object parameter.

    - [ ] The parameter should have a property named filters which is an object with a property named page of type number.

- [ ] API Request Modification:

    - [ ] Adjust the API request within the `getMovies` function to include the page parameter based on the provided filters.

- [ ] Default Pagination:

    - [ ] Implement a default value for the page parameter in case it is not provided. For example, set a default value of 1.

- [ ] Return Structure Modification:

    - [ ] Modify the return of the `getMovies` function to a Promise resolving an object with the structure `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`.

- [ ] Unit Testing:

    - [ ] Write unit tests for the modified `getMovies` function to ensure it handles pagination correctly.

    - [ ] Include test cases for providing different page numbers and testing the default pagination behavior.

## Definition of Done:

- [ ] The `getMovies` function is modified to accept an object parameter with the structure `{ filters: { page: number } }`.

- [ ] The API request within the function is adjusted to include the pagination parameter based on the provided filters.

- [ ] A default value for the page parameter is implemented.

- [ ] The return of the `getMovies` function is modified to a Promise resolving an object with the structure `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`.

- [ ] Unit tests for the modified `getMovies` function pass successfully, covering various pagination scenarios.
