# Enhance `Home` Component for Pagination Support

## Description:

Enhance the `Home` component to support pagination using the `Pagination` component. Integrate the `Pagination` component using the `onSelectPage` prop. Each time the user clicks on a page button, change the query parameter `currentPage` to the new page. Also, call the `getMovies` service each time the query parameter `currentPage` changes. Utilize the `useQuery` hook and consider defining two additional states to track the actual page and the total number of pages.

This task ensures that the `Home` component is enhanced to provide pagination support, allowing users to navigate through different pages of the movie catalog. The integration with the `Pagination` component, use of the `useQuery` hook, and additional states provide a responsive and user-friendly experience.

## Acceptance Criteria:

- [ ] Pagination Component Integration:

    - [ ] Integrate the `Pagination` component within the `Home` component using the `onSelectPage` prop.

- [ ] UseQuery Hook:

    - [ ] Utilize the `useQuery` hook to extract and track query parameters from the URL.

- [ ] Additional States:
    - [ ] Define two additional states, `actualPage` and `totalPages`, to track the current page and the total number of pages.

- [ ] Page Button Click Handling:

    - [ ] Change the query parameter `currentPage` to the new page.

    - [ ] Call the `getMovies` service each time the query parameter `currentPage` changes.

- [ ] Actual Page and Total Pages Display:

    - [ ] Display the actual page and total pages within the `Pagination` component or another relevant UI element.

- [ ] Unit Testing:

    - [ ] Write unit tests for the enhanced `Home` component, covering scenarios such as page button clicks, URL parameter changes, and successful service calls.

## Definition of Done:

- [ ] The `Pagination` component is integrated within the `Home` component using the `onSelectPage` prop.  

- [ ] The `useQuery` hook is used to extract and track query parameters from the URL.

- [ ] Two additional states, `actualPage` and `totalPages`, are defined to track the current page and the total number of pages.

- [ ] Page button clicks change the query parameter `currentPage` to the new page and trigger calls to the `getMovies` service.

- [ ] The actual page and total pages are displayed within the `Pagination` component or another relevant UI element.

- [ ] Unit tests for the enhanced `Home` component pass successfully, covering various pagination scenarios.
