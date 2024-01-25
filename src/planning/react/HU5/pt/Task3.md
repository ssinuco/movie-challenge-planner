# Create `MovieDetail` React Component

## Description:

Create a React component named `MovieDetail` to display detailed information about a single movie. Display this component on the route `/movie/:id` and implement features to show a loader while fetching data from the API and display a notification in the case of an error. Extract the id of the movie from the URL and use it in the `getMovieDetail` service. Provide a way for the user to navigate back to the `Home` component from the `MovieDetail` component.

This task ensures the creation of a `MovieDetail` component that provides a detailed view of a single movie based on its id, handling loading and error states gracefully.

## Acceptance Criteria:

- [ ] Component Creation:

    - [ ] Create a file named `MovieDetail.tsx` within the `components` folder.

- [ ] Display Information:

    - [ ] Display relevant information about the movie, including but not limited to: poster, original title, synopsis, rating, and release year.    

- [ ] Service Integration:

    - [ ] Use the `getMovieDetail` service to fetch detailed information about the movie based on its id.

    - [ ] Extract the movie id from the URL (route parameter).

- [ ] Loader Display:

    - [ ] Display a loader (e.g., a spinner) while fetching data from the API.

- [ ] Error Handling:

    - [ ] Implement error handling to display a notification in case of an error during data fetching.

- [ ] Navigation Back:

    - [ ] Provide a clear and intuitive way for the user to navigate back to the Home component.

- [ ] Route Configuration:

    - [ ] Configure the route for the `MovieDetail` component to be `/movie/:id`, where `:id` is the id of the movie.

- [ ] Unit Testing:

    - [ ] Write unit tests for the `MovieDetail` component to ensure correct integration with the `MovieDetailCard`, proper data fetching, and error handling.

## Definition of Done:

- [ ] The `MovieDetail.tsx` file is created within the components or pages folder.

- [ ] The `getMovieDetail` service is used to fetch detailed information about the movie based on its id.

- [ ] The movie id is extracted from the URL (route parameter) and used in the service call.

- [ ] A loader is displayed while fetching data from the API.

- [ ] Error handling is implemented to display a notification in case of an error during data fetching.

- [ ] The route for the `MovieDetail` component is configured to be `/movie/:id`.

- [ ] Unit tests for the `MovieDetail` component pass successfully, covering various scenarios.
