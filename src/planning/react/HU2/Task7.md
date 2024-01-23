# Develop MovieList React Component

## Description: 

Create a React component named MovieList to display the movie catalog in a table format. The component should receive an array of business models of movies as a prop and display each movie using the MovieCard component. Ensure that the \"Warning: Each child in a list should have a unique "key" prop\" error is avoided.

This task ensures the creation of a reusable MovieList component that displays the movie catalog in a table format, using the MovieCard component for each movie. The implementation also addresses the unique key requirement to avoid React warnings.

## Acceptance Criteria:

- [ ] Component Creation:

    - [ ] Create a file named MovieList.tsx within the components folder.

- [ ] Props:

    - [ ] Define a prop named movies of type Movie\[\] representing an array of business models of movies.

- [ ] Rendering Movie Cards:

    - [ ] Utilize the MovieCard component to render each movie in the movies prop.

    - [ ] Pass the relevant movie data as props to each instance of MovieCard.

- [ ] Unique Key Prop:

    - [ ] Implement a unique key prop for each MovieCard component to avoid the \"Warning: Each child in a list should have a unique "key" prop\" error.

    - [ ] Ensure that the key is derived from unique properties of each movie.

- [ ] Unit Testing:

    - [ ] Write unit tests for the MovieList component to ensure it renders correctly with various movie lists.

    - [ ] Include tests for different scenarios, such as empty movie lists or different types of movie information.

## Definition of Done:

- [ ] The MovieList.tsx file is created within the components folder.

- [ ] The component receives a prop named movies of type Movie\[\].

- [ ] The component renders each movie in the movies using the MovieCard component.

- [ ] Each instance of MovieCard has a unique key prop to avoid the \"Warning: Each child in a list should have a unique "key" prop\" error.

- [ ] Unit tests for the MovieList component pass successfully, covering various scenarios.
