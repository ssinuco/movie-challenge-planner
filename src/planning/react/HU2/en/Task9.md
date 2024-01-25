# Develop Integration Tests for `Home` Component

## Description 

Write integration tests to ensure the `Home` component displays data correctly using mocked API responses. The tests should cover scenarios such as displaying movies correctly based on mocked data and handling API errors appropriately.

These integration tests ensure that the `Home` component functions as expected in different scenarios, providing confidence in its behavior when integrated with the application. The use of mocked API responses allows for controlled testing of various conditions, including both successful and error states.

## Acceptance Criteria

- [ ] Mock API Responses:

    - [ ] Utilize a testing library such as react-testing-library or enzyme to mock API responses for the `getMovies` service used in the `Home` component.

- [ ] Successful Data Display:

    - [ ] Write a test to ensure that the `Home` component correctly displays movies based on mocked data.

    - [ ] Use mocked data that represents various scenarios, such as different movies with diverse properties.

- [ ] Loader Display:

    - [ ] Verify that a loader (e.g., a spinner) is displayed when data is being fetched (isLoading is true).

- [ ] Error Handling:

    - [ ] Write a test to simulate an API error during data fetching.

    - [ ] Ensure that the `Home` component appropriately handles the error by displaying an error message or notification.

- [ ] Clean-up and Isolation:

    - [ ] Ensure that each test case has proper clean-up and isolation to avoid interference between tests.

    - [ ] Use testing utilities to reset state between tests.

## Definition of Done

- [ ] Integration tests for the `Home` component are developed using a testing library.

- [ ] Mock API responses are used to simulate various scenarios, including successful data display and API errors.

- [ ] The tests pass successfully, validating that the `Home` component displays data correctly and handles API errors appropriately.

- [ ] Clean-up and isolation mechanisms are in place to maintain test reliability.
