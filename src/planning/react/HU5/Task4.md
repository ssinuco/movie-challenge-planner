# Integrate `Home` Component with `MovieDetail` Component

## Description:

Integrate the `Home` component with the `MovieDetail` component so that when a user clicks on a movie, the app redirects the user to the `/movie/:id` URL to display detailed information about the selected movie. Utilize the React Router hook `useNavigate` to accomplish this. Configure the `onClick` prop of the `MovieCard` component properly for navigation.

This task ensures the seamless integration of the `Home` component with the `MovieDetail` component, allowing users to navigate to detailed information about a selected movie when clicked. The use of `useNavigate` and proper configuration of the `onClick` prop facilitate a smooth user experience.

## Acceptance Criteria:

- [ ] Navigation Setup:

    - [ ] Utilize the React Router hook `useNavigate` in the `Home` component to enable navigation.

- [ ] `onClick` Prop Configuration:

    - [ ] Configure the `onClick` prop of the `MovieCard` component in the `Home` component to trigger navigation to the `/movie/:id` URL.

- [ ] Unit Testing:

    - [ ] Write unit tests for the `Home` component to ensure that clicking on a movie triggers the correct navigation and renders the `MovieDetail` component.

## Definition of Done:

- [ ] The `useNavigate` hook is utilized in the `Home` component to enable navigation.

- [ ] The `onClick` prop of the `MovieCard` component in the `Home` component is configured to trigger navigation to the \"`/movie/:id`\" URL.

- [ ] The `MovieDetail` component is integrated into the route \"`/movie/:id`\" to display detailed information about the selected movie.

- [ ] Unit tests for the `Home` component pass successfully, covering various scenarios.
