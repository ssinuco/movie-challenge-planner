# Develop `ListOptions` React Component

## Description:

Create a React component named `ListOptions` that allows the user to select an item from a list of `options` and clear the selection.

This task ensures the creation of a reusable `ListOptions` component that allows users to select an option from a dropdown and clear the selection when needed. The component\'s behavior is designed to handle user interactions and provide a seamless user experience.

## Acceptance Criteria:

- [ ] Component Creation:

    - [ ] Create a file named `ListOptions.tsx` within the components folder.

- [ ] Props: The component should receive the following props:

    - [ ] `options`:

        -   Type: Array of objects { value: string, label: string }

        -   Description: An array of options where each option is an object with value and label properties.

    - [ ] `onChange`:

        -   Type: Function

        -   Description: A callback function to be called when selecting an option. It should receive the selected option as a parameter.

    - [ ] `selectedOption`:

        -   Type: Object { value: string, label: string } or null

        -   Description: Represents the currently selected option. It can be null if no option is selected.

    - [ ] `onClear`:

        -   Type: Function

        -   Description: A callback function to be called when the user removes the selection.

- [ ] Dropdown UI:

    - [ ] Display a dropdown/select input containing the provided `options`.

    - [ ] Highlight the selected option in the dropdown.

- [ ] Option Selection:

    - [ ] Implement the ability to select an option from the dropdown.

    - [ ] Call the `onChange` callback with the selected option.

- [ ] Clear Selection:

    - [ ] Include a button or icon to clear the current selection.

    - [ ] Call the `onClear` callback when the user clicks to remove the selection.

- [ ] Unit Testing:

    - [ ] Write unit tests for the `ListOptions` component, covering scenarios such as selecting an option, clearing the selection, and validating UI changes.

## Definition of Done:

- [ ] The `ListOptions.tsx` file is created within the components folder.

- [ ] Dropdown UI is displayed with correct highlighting for the selected option.

- [ ] The ability to select an option and clear the selection is implemented.

- [ ] Unit tests for the `ListOptions` component pass successfully, covering various scenarios.
