# Implement Movie Data Get Function

## Description:

Develop a function `getMovies` to fetch movie data from The Movie DB\'s `/discover/movie` endpoint. The function should not receive any parameters and return a Promise resolving to an array of objects of type Movie. Additionally, utilize the `formatMovie` function to transform API movie data to the business model Movie.

This task ensures the implementation of a robust function for fetching movie data, incorporating data transformation using the `formatMovie` function, and handling API responses effectively. Unit tests further validate the correctness of the implementation.

## Acceptance Criteria:

- [ ] Function Signature:

    - [ ] Create a function named `getMovies` within the appropriate service file (e.g., movieService.ts).

- [ ] Parameters:

    - [ ] Ensure that the `getMovies` function takes no parameters.

- [ ] Return Type

    - [ ] The function should return a Promise resolving to an array of business model movie objects (`Promise<Movie[]>`).

- [ ] API Request:

    - [ ] Utilize a HTTP client library to make a GET request to The Movie DB\'s `/discover/movie` endpoint.

    - [ ] Include the API token in the request headers, retrieved from the configuration loader.

- [ ] Data Transformation:

    - [ ] Apply the `formatMovie` function to transform the API movie data to the business model within the `getMovies` function.

- [ ] Unit Testing:

    - [ ] Write unit tests for the `getMovies` function, including test cases for a successful API request, error handling, and correct data transformation.

## Definition of Done:

- [ ] The `getMovies` function is implemented and resides within the appropriate service file.

- [ ] The function takes no parameters and returns a Promise resolving to an array of business model `Movie` objects (`Promise<Movie[]>`).

- [ ] The function successfully makes a GET request to The Movie DB\'s `/discover/movie` endpoint with the API token.

- [ ] API responses are handled appropriately, including error scenarios.

- [ ] The `formatMovie` function is applied to transform API movie data to the business model `Movie`.

- [ ] Unit tests for the `getMovies` function pass successfully, covering various scenarios.
