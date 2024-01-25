# Enhance `getMovies` Function for Filtering and Sorting Support

## Description:

Enhance the `getMovies` service function to support filtering and sorting by receiving an object as a parameter. The new parameter structure should be `{ filters: { page: number, genre: number | null, releaseSort: 'asc' | 'desc' | null } }`.

This enhancement enables more precise data fetching from the API by allowing users to specify page numbers, genre filters, and sorting orders.

## Acceptance Criteria:

- [ ] Function Signature:

    - [ ] Enhance the existing `getMovies` function to accept an object parameter.

- [ ] Parameter Structure:

    - [ ] The parameter should have a property named filters which is an object with the following properties:

        - [ ] `page`: A property of type number representing the page number.

        - [ ] `genre`: A property of type number or `null` representing the genre filter. If `null`, no genre filtering is applied.

        - [ ] `releaseSort`: A property of type string `asc`, `desc`, or `null` representing the sorting order. If `null`, no sorting is applied.

- [ ] API Request Modification:

    - [ ] Adjust the API request within the `getMovies` function to include filtering and sorting based on the provided parameters.

- [ ] Default Values:

    - [ ] Implement default values for `genre` and `releaseSort` in case they are not provided. For example, set default values of `null` for both.

- [ ] Unit Testing:

    - [ ] Write unit tests for the modified `getMovies` function to ensure it correctly handles filtering and sorting scenarios.

    - [ ] Include test cases for providing different page numbers, genre filters, and sorting orders.

## Definition of Done:

- [ ] The `getMovies` function is enhanced to accept an object parameter with the structure `{ filters: { page: number, genre: number | null, releaseSort: 'asc' | 'desc' | null } }`.

- [ ] The API request within the function is adjusted to include filtering and sorting based on the provided parameters.

- [ ] Default values for `genre` and `releaseSort` are implemented.

- [ ] Unit tests for the modified `getMovies` function pass successfully, covering various filtering and sorting scenarios.
