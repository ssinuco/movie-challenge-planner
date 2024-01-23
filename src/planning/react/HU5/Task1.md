# Develop `getMovieDetail` Function

## Description:

Develop a function named `getMovieDetail` to fetch data of a single movie by id from The Movie DB\'s `/movie/{movie_id}` endpoint. The function should receive a parameter id and return a `Promise` resolving to a business model Movie. Additionally, utilize the `formatMovie` function to transform API movie data to the business model Movie.

This task ensures the development of the `getMovieDetail` function, allowing the application to fetch detailed information about a single movie by id from The Movie DB\'s API. The integration of the `formatMovie` function ensures consistent data transformation for the business model.

## Acceptance Criteria:

- [ ] Function Signature:

    - [ ] Create a function named `getMovieDetail` within the appropriate service file (e.g., movieService.ts).

- [ ] Parameter:

    - [ ] The function should receive a parameter named id representing the id of the movie to fetch.

- [ ] Return Type:

    - [ ] The function should return a `Promise` that resolves to a business model Movie.

- [ ] API Request:

    - [ ] Utilize a HTTP client library to make a GET request to The Movie DB\'s `/movie/{movie_id}` endpoint.

    - [ ] Include the API token in the request headers, retrieved from the configuration loader.

- [ ] Data Transformation:

    - [ ] Utilize the `formatMovie` function to transform API movie data to the business model Movie.

- [ ] Unit Testing:

    - [ ] Write unit tests for the `getMovieDetail` function to ensure correct API request, parameter handling, and data transformation.

## Definition of Done:

- [ ] The `getMovieDetail` function is implemented and resides within the appropriate service file.

- [ ] The function receives a parameter named id representing the id of the movie and returns a `Promise` that resolves to a business model Movie.

- [ ] The function successfully makes a GET request to The Movie DB\'s `/movie/{movie_id}` endpoint with the API token.

- [ ] API responses are handled appropriately, including error scenarios.

- [ ] The `formatMovie` function is utilized to transform API movie data to the business model Movie.

- [ ] Unit tests for the `getMovieDetail` function pass successfully, covering various scenarios.
