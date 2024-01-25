# Implement `getMovieGenreData` Function for Fetching Movie Genres

## Description:

Implement a new function named `getMovieGenreData` to fetch a list of movie genres from the `/genre/movie/list` endpoint. This function should utilize the `formatMovieGenre` function to transform API movie genre data into a JavaScript Map. The `getMovieGenreData` function should not receive any parameters and should return a Promise resolving to the JavaScript Map.

Implementing `getMovieGenreData` allows for the retrieval of movie genre data from the API, and utilizing `formatMovieGenre` ensures a structured and usable format for the genres in the form of a JavaScript Map.

## Acceptance Criteria:

- [ ] Function Signature:

    - [ ] Implement a function named `getMovieGenreData` within the appropriate service file (e.g., movieService.ts).

- [ ] No Parameters:

    - [ ] The function should not receive any parameters.

- [ ] Return Type

    - [ ] The function should return a Promise that resolves to the JavaScript Map created using `formatMovieGenre`.

- [ ] API Request:

    - [ ] Utilize an API request to fetch data from the `/genre/movie/list` endpoint.

- [ ] Data Transformation:

    - [ ] Use the `formatMovieGenre` function to transform the fetched API movie genre data into a JavaScript Map.

- [ ] Unit Testing:

    - [ ] Write unit tests for the `getMovieGenreData` function in `transformers.spec.ts` file into the `src/utils` folder, including test cases for a successful API request, error handling, and correct data transformation.

## Definition of Done:

- [ ] The `getMovieGenreData` function is implemented and resides within the appropriate service file.

- [ ] The function utilizes an API request to fetch data from the `/genre/movie/list` endpoint.

- [ ] The fetched API movie genre data is transformed into a JavaScript Map using the `formatMovieGenre` function.

- [ ] API responses are handled appropriately, including error scenarios.

- [ ] The `formatMovieGenre` function is applied to transform API movie genre data to a JavaScript Map.

- [ ] Unit tests for the `formatMovieGenre` function pass successfully, covering various scenarios.
