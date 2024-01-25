# Develop Pagination React Component

## **Description:** 

Create a React component named Pagination to display a pagination UI control. The component should receive the following props:

- [ ] `onSelectPage`:

    - [ ] Type: Function

    - [ ] Description: A callback function to be called with the clicked page number when a user selects a new page.

- [ ] `currentPage`:

    - [ ] Type: Number

    - [ ] Description: The current page number.

- [ ] `totalPages`:

    - [ ] Type: Number

    - [ ] Description: The total number of pages.

This task ensures the creation of a reusable Pagination component that can be easily integrated into the application to provide a user-friendly pagination UI. The component\'s behavior is designed to handle click events and disable navigation for invalid pages.

## Acceptance Criteria:

- [ ] Component Creation:

    - [ ] Create a file named Pagination.tsx within the components folder.

    - [ ] Develop the Pagination component using functional component syntax.

- [ ] Props Validation:

    - [ ] Validate the incoming props to ensure that they have the correct types (`onSelectPage` is a function, `currentPage` and `totalPages` are numbers).

- [ ] Pagination UI:

    - [ ] Display a set of pagination buttons based on the total number of pages.

    - [ ] Highlight the button corresponding to the current page.

- [ ] Click Event Handling:

    - [ ] Implement click event handling for pagination buttons.

    - [ ] Call the `onSelectPage` callback with the clicked page number.

- [ ] Disable Navigation for Invalid Pages:

    - [ ] Disable the "Previous" button if the current page is the first page.

    - [ ] Disable the "Next" button if the current page is the last page.

- [ ] Unit Testing:

    - [ ] Write unit tests for the Pagination component, covering scenarios such as clicking on pagination buttons and validating UI changes based on different props.

## Definition of Done:

- [ ] The Pagination.tsx file is created within the components folder.

- [ ] The Pagination component is developed using functional component syntax.

- [ ] Incoming props are validated to ensure correct types.

- [ ] Pagination UI is displayed with correct button highlighting based on the current page.

- [ ] Click event handling is implemented to call the `onSelectPage` callback with the clicked page number.

- [ ] Navigation buttons are disabled appropriately for the first and last pages.

- [ ] Unit tests for the Pagination component pass successfully, covering various scenarios.
