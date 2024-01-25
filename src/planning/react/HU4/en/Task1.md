# Implement Movie Genre Transformation Function

## Description:

Create a function named `formatGenre` into `src/utils/transformers.ts` file to transform an array of API genre data models into a JavaScript [_Map_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). The [_Map_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) should have keys representing the genre ids and values representing the genre names.

This transformation enhances the usability of genre data by providing a key-value mapping for quick lookups.

## Acceptance Criteria:

- [ ] Function Signature:

    - [ ] Create a function named `formatGenre` into `src/utils/transformers.ts`.

- [ ] Parameters:

    - [ ] The function should accept an array of API genre data models as input.

- [ ] Return Type:

    - [ ] The function should return a JavaScript [_Map_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

- [ ] Map Structure:

    - [ ] The keys of the Map should be the ids of the genres.

    - [ ] The values of the Map should be the names of the genres.

- [ ] Example:

    - [ ] For example, given the following input:

        ```js
        [
            { id: 28, name: 'Action' },
            { id: 35, name: 'Comedy' },
            { id: 18, name: 'Drama' },
        ]
        ```

        The function should return a Map:

        ```js
        new Map([
            [28, 'Action'],
            [35, 'Comedy'],
            [18, 'Drama'],
        ]);
        ```
- [ ] Handling Empty Input:

    - [ ] Ensure the function gracefully handles an empty input array, returning an empty Map.

**Definition of Done:**

- [ ] The `formatGenre` function is created into `src/utils/transformers.ts`

- [ ] The function takes an array of API genre data models as input.

- [ ] The function returns a JavaScript Map with keys representing genre ids and values representing genre names.

- [ ] The function handles empty input gracefully, returning an empty Map.
