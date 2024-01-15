# \[User Story\]: Project setup

## Description:

This is not a User Story, but when starting a project there are always a
series of tasks to which we must dedicate time.

## Tasks

\[Task\] Create High-Fidelity Prototype

\[Task\] Create GitHub Repository and Protect Main Branch

\[Task\] Create React TypeScript SPA with ViteJS

\[Task\] Project Structure Setup

\[Task\] Install and Configure Unit Testing Libraries for React
Components

\[Task\] Set Up ESLint for Code Linting

\[Task\] Desplegar aplicación

## Definition of Done

-   We must be able to run the \`npm start\` command and have our
    > browser display the default application of a ViteJS project

-   We should be able to run the \`npm run test\` command to first
    > Eslinty then run the tests (jest)

-   It should not be possible to do a direct push to the main branch

-   There must be a Figma with the high fidelity designs

# \[Task\] Create High-Fidelity Prototype 

## Description:

Create a high-fidelity prototype based on the low-fidelity prototype
specified in the README.

Creating a high-fidelity prototype with attention to design,
interactivity, and TypeScript integration provides a comprehensive
overview of the SPA\'s user interface and functionality, aiding in both
development and stakeholder communication.

## Acceptance Criteria:

1.  Wireframes and UI Design:

    a.  Create detailed wireframes and UI designs for each screen of the
        > SPA, considering user interactions and visual aesthetics.

    b.  Utilize Figma for creating the wireframes.

2.  Navigation Flow:

    a.  Design and illustrate the navigation flow between different
        > screens or components within the SPA.

    b.  Clearly depict how users can navigate through the application.

3.  User Flows and Use Cases:

    a.  Illustrate common user flows and use cases, showcasing how users
        > can achieve specific tasks within the application.

## Definition of Done:

1.  Detailed wireframes and UI designs are created for each screen of
    > the SPA using figma.

2.  Navigation flow between screens or components is clearly
    > illustrated.

3.  Interactivity is added to wireframes, demonstrating component
    > behavior and user interactions.

4.  The prototype incorporates responsive design principles for a
    > consistent user experience.

5.  User flows and use cases are illustrated to showcase the
    > application\'s functionality.

6.  Include a link figma in the README

7.  Take 2 or 3 days maximum to complete this task.

# \[Task\] Create GitHub Repository and Protect Main Branch

## Description

Set up a new GitHub repository. Implement branch protection for the main
branch to ensure code integrity and prevent accidental changes. At
least, define a rule for main branch to require a pull request before
merging changes.

## Acceptance Criteria:

1.  GitHub Repository Creation:

    a.  Create a new GitHub repository with an appropriate name for the
        > SPA.

2.  Branch Protection:

    a.  Configure branch protection for the main branch.

    b.  Define protection rules, such as requiring pull request reviews
        > before merging and enforcing status checks.

## Definition of Done:

1.  A GitHub repository is created with an appropriate name for the SPA.

2.  Branch protection is configured for the main branch with rules such
    > as requiring pull request reviews and status checks.

# \[Task\]: Create React TypeScript SPA with ViteJS

## Descripción

Set up a new React TypeScript Single Page Application (SPA) using ViteJS
as the build tool.

## Acceptance Criteria:

Use ViteJS to initialize a new React TypeScript project.

## Definition of Done:

A new React TypeScript project is initialized using ViteJS.

# \[Task\] Project Structure Setup

### **Description:**

Create the initial project structure for the SPA using React and
TypeScript, organizing files and folders to ensure a clean and
maintainable codebase.

## Acceptance Criteria:

Inside src, create the following folders:

1.  components: To house React components.

2.  services: For services responsible for handling specific business
    > logic or functionality separate from the user interface components
    > such as fetching data from APIs.

3.  styles: To store global styles or style utilities.

4.  utils: For utility functions that don\'t fit in other categories.

5.  assets: To store assets such as images, fonts, and icons.

6.  types: To store common types and interfaces used throughout the
    > application

## Definition of Done:

The project structure adheres to the specified folder hierarchy.

# \[Task\]: Install and Configure Unit Testing Libraries for React Components

Descripción

Set up the necessary libraries and configurations to enable the
execution of unit tests for React components in the project.

Acceptance Criteria

1.  Install the required testing libraries such:

    a.  Jest

    b.  Babel

    c.  Jest JSOM Environment

    d.  Test Library

2.  Add testing scripts to the project\'s package.json file to run Jest
    > tests.

3.  Write a basic test to verify the App component\'s rendering or
    > functionality.

## Definition of Done:

1.  Jest and React Testing Library are installed as development
    > dependencies.

2.  A jest.config.js file is created and configured to recognize
    > TypeScript files.

3.  Babel is configured to handle TypeScript files, and the necessary
    > presets are installed.

4.  Testing scripts are added to the project\'s package.json file for
    > running Jest tests.

5.  A sample unit test file is created for the App component.

6.  Jest runs the sample unit test successfully, and the test suite
    > executes without errors.

# \[Task\]: Set Up ESLint for Code Linting

## Description

Configure ESLint to enforce consistent coding styles, identify potential
errors, and improve code quality within the project.

Acceptance Criteria

1.  Install ESLint:

    a.  Install ESLint as a development dependency in the project.

2.  Create ESLint Configuration:

    a.  Generate an ESLint configuration file (e.g., .eslintrc.js or
        > .eslintrc.json) in the project root.

3.  Extend Base Configuration:

    a.  Extend a base ESLint configuration that aligns with React and
        > TypeScript development. Common presets include
        > eslint:recommended, plugin:react/recommended, and
        > plugin:@typescript-eslint/recommended.

4.  Configure TypeScript Support:

    a.  Enable TypeScript support in ESLint by configuring the parser
        > option and setting the appropriate TypeScript parser (e.g.,
        > \@typescript-eslint/parser).

5.  Plugin Configuration:

    a.  Configure ESLint plugins for React (eslint-plugin-react),
        > TypeScript (@typescript-eslint/eslint-plugin), and any other
        > relevant plugins.

6.  Define ESLint Rules:

    a.  Define ESLint rules in the configuration file based on project
        > requirements and coding standards.

    b.  Customize rules to fit the team\'s preferred coding style.

7.  Package.json

    a.  Add testing scripts to the project\'s package.json file to run
        > EsLint.

8.  Integrate with Prettier:

    a.  Integrate ESLint with Prettier by adding the
        > eslint-config-prettier package and extending it in the ESLint
        > configuration. This ensures consistent code formatting.

9.  Testing:

    a.  Run ESLint on the project files to verify that linting is
        > working correctly.

    b.  Address and fix any identified linting issues.

## Definition of Done:

1.  ESLint is installed as a development dependency.

2.  An ESLint configuration file (e.g., .eslintrc.js or .eslintrc.json)
    > is created in the project root.

3.  The ESLint configuration extends a base configuration suitable for
    > React and TypeScript development.

4.  TypeScript support is configured using the appropriate parser
    > (@typescript-eslint/parser).

5.  ESLint plugins for React and TypeScript are configured.

6.  ESLint rules are defined and customized based on project
    > requirements and coding standards.

7.  ESLint is integrated with Prettier for consistent code formatting.

8.  ESLint is executed on project files, and any identified linting
    > issues are addressed and fixed.

9.  Linter scripts are added to the project\'s package.json file for
    > running EsLint.

# \[Task\] Deploy React SPA to Cloud Service 

## Description:

Deploy the React Single Page Application (SPA) to a cloud service such
as [[Vercel]{.underline}](https://vercel.com/) or
[[Netlify]{.underline}](https://www.netlify.com/) to make it accessible
online. Set up continuous deployment to automatically deploy changes
whenever new code is pushed to the main branch of the connected
repository.

## Acceptance Criteria:

Choose a cloud service to deploy the React Single Page Application.
Connect the project\'s GitHub repository to the cloud service.

## Definition of Done:

1.  The application is successfully deployed, and a deployment URL is
    > provided.

2.  Continuous deployment is set up to automate the deployment process
    > when new code is pushed to the main branch.

# \[User Story\]: Movie list

## Description

As a user, I want to visualize in a table (rows and columns) the movie
catalog.

## Tasks

\[Task\] Create a Token API Integration for The Movie DB

\[Task\] Implement Configuration Loader for .env File

\[Task\] Implement Movie Data Transformation Function

\[Task\] Create TypeScript Type for Movie Business Model

\[Task\] Develop MovieCard React Component

\[Task\] Develop MovieList React Component

\[Task\] Develop Home React Component with MovieList Integration

\[Task\] Develop Integration Tests for Home Component

\[Task\] Enhance getMovies Function for Pagination Support

\[Task\] Develop Pagination React Component

\[Task\] Enhance Home Component for Pagination Support

## Definition of Done

When visiting the deployed application you must visualize in a table
(rows and columns) the movie catalog of [*[The Movie Database API
V3]{.underline}*](https://developer.themoviedb.org/docs)

# \[Task\] Create a Token API Integration for The Movie DB

## Description

Create an API token for [*[The Movie
Database]{.underline}*](https://developer.themoviedb.org/docs), and
store it as a value for the TOKEN_API key in a src/.env file.

This task ensures secure and organized management of the API token,
preventing it accidental exposure of it in Github and making it easily
accessible within the application for API requests to The Movie DB.

## Acceptance Criteria:

1.  The Movie DB Account:

    a.  Create an account on The Movie DB platform to obtain API access.

2.  API Token Retrieval:

    a.  Access The Movie DB developer portal and generate an API
        > key/token.

    b.  Verify that the API key/token provides access to the necessary
        > endpoints, such as /discover/movie.

3.  Environment Variable:

    a.  Create a .env file at the root of the project.

    b.  Add a key-value pair TOKEN_API=\<Your-API-Token\> in the .env
        > file, replacing \<Your-API-Token\> with the actual API token
        > obtained.

4.  Secure Handling:

    a.  Ensure that the .env file is added to the project\'s .gitignore
        > file to prevent accidental exposure of sensitive information.

## Definition of Done:

1.  An account on The Movie DB platform is created.

2.  An API key/token is generated and verified for access to The Movie
    > DB API.

3.  The .env file is created at the root of the project with the
    > TOKEN_API key and the actual API token.

4.  The .env file is added to the project\'s .gitignore file.

# Task: Implement Configuration Loader for .env File

## Description:

Develop a configuration loader that reads the .env file and makes the
API token available within the application.

This task ensures that the application is equipped with a robust
configuration loader, enabling seamless access to the API token
specified in the .env file throughout the codebase. Error handling
mechanisms also contribute to the reliability of the configuration
loading process.

## Acceptance Criteria:

1.  Configuration Loader:

    a.  Implement a configuration loader function/module that reads the
        > .env file and loads its key-value pairs into the application.

    b.  Use a library like dotenv for handling the loading of
        > environment variables.

2.  API Token Availability:

    a.  Ensure that the API token specified by the TOKEN_API key in the
        > .env file is successfully loaded and available for use within
        > the application.

3.  Integration with Application:

    a.  Integrate the configuration loader into the application\'s
        > initialization process.

    b.  Confirm that the API token is accessible in the parts of the
        > application where it is needed, such as services responsible
        > for making API requests.

4.  Error Handling:

    a.  Implement appropriate error handling for cases where the .env
        > file is missing or malformed.

    b.  Ensure that the application fails gracefully and provides
        > meaningful error messages in such scenarios.

## Definition of Done:

1.  A configuration loader function/module is implemented.

2.  The loader successfully reads the .env file and loads its key-value
    > pairs.

3.  The API token specified by the TOKEN_API key is available for use
    > within the application.

4.  The configuration loader is seamlessly integrated into the
    > application\'s initialization process.

5.  The application handles errors related to the absence or
    > malformation of the .env file gracefully, providing meaningful
    > error messages.

6.  The code is well-documented, adheres to coding standards, and
    > includes comments where necessary.

# \[Task\] Create TypeScript Type for Movie Business Model

## Description:

Define a TypeScript type named Movie to represent the business model of
a movie. This type should include fields required for both UI rendering
and business logic. Place the type definition in a Movie.d.ts file
within the src/model folder.

Creating a TypeScript type for the movie business model helps maintain a
clear structure in the application and provides type safety throughout
the development process. Placing the type definition in a .d.ts file
within the src/model folder ensures proper organization.

## Acceptance Criteria:

1.  Create movie.d.ts File:

    a.  Create a file named Movie.d.ts within the src/model folder to
        > store the TypeScript type definition.

2.  Define Movie Type:

    a.  Define a TypeScript type named Movie within the Movie.d.ts file.

    b.  Include fields such as title, poster, releaseYear, and any other
        > relevant information needed for UI and business logic.

3.  Export Type:

    a.  Export the Movie type from the movie.d.ts file, making it
        > accessible for other parts of the application.

## Definition of Done:

1.  A file named movie.d.ts is created within the src/model folder.

2.  The Movie type is defined within the .d.ts file, including fields
    > for UI rendering and business logic.

3.  The Movie type is successfully exported from the .d.ts file.

# \[Task\] Implement Movie Data Transformation Function

## Description

Create a file transformers.ts into src/utils folder. Create a function
named formatMovie within that file. This function will handle the
transformation of API movie data to the business model Movie.

By creating a dedicated file for transformers and the formatMovie
function, this task ensures a modular and organized approach to data
transformation within the project.

## Acceptance Criteria:

1.  File and Folder Structure:

    a.  Ensure the existence of a utils folder within the src directory.

    b.  Create a file named transformers.ts within the utils folder.

2.  formatMovie Function:

    a.  Implement a function named formatMovie within the
        > transformers.ts file.

    b.  The function should take an API movie data object as a parameter
        > and return a business model object Movie.

    c.  Map relevant fields from the API data to the corresponding
        > fields in the business model Movie.

    d.  Handle any necessary data conversions or transformations to
        > ensure consistency.

3.  Unit Testing:

    a.  Write unit tests for the formatMovie function in a \_\_tests\_\_
        > folder within the utils directory.

    b.  Test the function with various types of API movie data to ensure
        > correct transformation.

    c.  Include tests for edge cases and potential errors.

## Definition of Done:

1.  The utils folder is created within the src directory.

2.  The transformers.ts file is created within the utils folder.

3.  The formatMovie function is implemented and successfully transforms
    > API movie data to the business model Movie.

4.  Unit tests for the formatMovie function pass successfully, covering
    > various scenarios.

5.  The code adheres to coding standards, is well-documented, and
    > includes comments where necessary.

# \[Task\] Implement Movie Data Get Function

## Description:

Develop a function getMovies to fetch movie data from The Movie DB\'s
/discover/movie endpoint. The function should not receive any parameters
and return a Promise resolving to an array of business model movie
objects Movie. Additionally, utilize the formatMovie function to
transform API movie data to the business model Movie.

This task ensures the implementation of a robust function for fetching
movie data, incorporating data transformation using the formatMovie
function, and handling API responses effectively. Unit tests further
validate the correctness of the implementation.

## Acceptance Criteria:

1.  Function Signature:

    a.  Create a function named getMovies within the appropriate service
        > file (e.g., movieService.ts).

2.  Parameters:

    a.  Ensure that the getMovies function takes no parameters.

3.  Return Type

    a.  The function should return a Promise resolving to an array of
        > business model movie objects (Promise\<Movie\[\]\>).

4.  API Request:

    a.  Utilize a HTTP client library to make a GET request to The Movie
        > DB\'s /discover/movie endpoint.

    b.  Include the API token in the request headers, retrieved from the
        > configuration loader.

5.  Data Transformation:

    a.  Apply the formatMovie function to transform the API movie data
        > to the business model within the getMovies function.

6.  Unit Testing:

    a.  Write unit tests for the getMovies function, including test
        > cases for a successful API request, error handling, and
        > correct data transformation.

## Definition of Done:

1.  The getMovies function is implemented and resides within the
    > appropriate service file.

2.  The function takes no parameters and returns a Promise resolving to
    > an array of business model Movie objects (Promise\<Movie\[\]\>).

3.  The function successfully makes a GET request to The Movie DB\'s
    > /discover/movie endpoint with the API token.

4.  API responses are handled appropriately, including error scenarios.

5.  The formatMovie function is applied to transform API movie data to
    > the business model Movie.

6.  Unit tests for the getMovies function pass successfully, covering
    > various scenarios.

# \[Task\] Develop MovieCard React Component

## Description: 

Create a React component named MovieCard to display information about a
single movie. The component should receive a business model of a movie
as a prop, and display relevant information such as the movie\'s poster,
original title, and release year.

This task ensures the creation of a reusable MovieCard component that
can be easily integrated into the application to display information
about a single movie. The component\'s props and structure are designed
to accommodate the business model of a movie.

## Acceptance Criteria:

1.  Component Creation:

    a.  Create a file named MovieCard.tsx within the components folder.

2.  Props:

    a.  Define a prop named movie of type Movie representing the
        > business model of a movie.

3.  Display Information:

    a.  Utilize the information from the movie prop to display the
        > movie\'s poster, original title, and release year.

    b.  Implement appropriate HTML and/or CSS for styling the movie
        > card.

4.  Unit Testing:

    a.  Write unit tests for the MovieCard component to ensure it
        > renders correctly with various movie data.

    b.  Include tests for different scenarios, such as missing data or
        > different types of movie information.

## Definition of Done:

1.  The MovieCard.tsx file is created within the components folder.

2.  The component receives a prop named movie of type Movie.

3.  The component displays the movie\'s poster, original title, and
    > release year using information from the movie prop.

4.  Unit tests for the MovieCard component pass successfully, covering
    > various scenarios.

# \[Task\] Develop MovieList React Component

## Description: 

Create a React component named MovieList to display the movie catalog in
a table format. The component should receive an array of business models
of movies as a prop and display each movie using the MovieCard
component. Ensure that the \"Warning: Each child in a list should have a
unique "key" prop\" error is avoided.

This task ensures the creation of a reusable MovieList component that
displays the movie catalog in a table format, using the MovieCard
component for each movie. The implementation also addresses the unique
key requirement to avoid React warnings.

## Acceptance Criteria:

1.  Component Creation:

    a.  Create a file named MovieList.tsx within the components folder.

2.  Props:

    a.  Define a prop named movies of type Movie\[\] representing an
        > array of business models of movies.

3.  Rendering Movie Cards:

    a.  Utilize the MovieCard component to render each movie in the
        > movies prop.

    b.  Pass the relevant movie data as props to each instance of
        > MovieCard.

4.  Unique Key Prop:

    a.  Implement a unique key prop for each MovieCard component to
        > avoid the \"Warning: Each child in a list should have a unique
        > "key" prop\" error.

    b.  Ensure that the key is derived from unique properties of each
        > movie.

5.  Unit Testing:

    a.  Write unit tests for the MovieList component to ensure it
        > renders correctly with various movie lists.

    b.  Include tests for different scenarios, such as empty movie lists
        > or different types of movie information.

## Definition of Done:

1.  The MovieList.tsx file is created within the components folder.

2.  The component receives a prop named movies of type Movie\[\].

3.  The component renders each movie in the movies using the MovieCard
    > component.

4.  Each instance of MovieCard has a unique key prop to avoid the
    > \"Warning: Each child in a list should have a unique "key" prop\"
    > error.

5.  Unit tests for the MovieList component pass successfully, covering
    > various scenarios.

# \[Task\] Develop Home React Component with MovieList Integration

## Description

Create a React component named Home to integrate the MovieList component
with the getMovies service. Display this component on the route \"/\"
and implement features to show a loader while fetching data from the API
and display a notification in the case of an error.

This task ensures the development of a Home component that seamlessly
integrates the MovieList component with the getMovies service, providing
a user-friendly experience with loaders and error notifications. The
component is also properly routed to the \"/\" route for user access.

## Acceptance Criteria:

1.  Component Creation:

    a.  Create a file named Home.tsx within the components or pages
        > folder.

    b.  Develop the Home component using functional component syntax.

2.  Integration with MovieList:

    a.  Integrate the MovieList component within the Home component.

    b.  Utilize the getMovies service to obtain the movie data to be
        > displayed.

3.  Loader Display:

    a.  Show a loader (e.g., a spinner or loading message) while
        > fetching data from the API.

    b.  Ensure that the loader is displayed to the user during the data
        > retrieval process.

4.  Error Notification:

    a.  Implement a mechanism to display a notification in the case of
        > an error while fetching data from the API.

    b.  The notification should convey a clear error message to the
        > user.

5.  Routing:

    a.  Ensure that the Home component is displayed when the user
        > navigates to the route \"/\".

    b.  Use a React Router or the routing mechanism of your choice to
        > handle the route.

## Definition of Done:

1.  The Home.tsx file is created within the components or pages folder.

2.  The Home component is developed using functional component syntax.

3.  The MovieList component is successfully integrated within the Home
    > component.

4.  A loader is displayed to the user while fetching data from the API.

5.  A notification is displayed in the case of an error while fetching
    > data from the API.

6.  The Home component is displayed when the user navigates to the route
    > \"/\".

## Tip:

Consider defining the following states using the useState hook:

const \[isLoading, setIsLoading\] = useState(false);

const \[movies, setMovies\] = useState\<Movie\[\]\>(\[\]);

const \[error, setError\] = useState(false);

Use these states to manage the loading state, store fetched movie data,
and handle errors during the data-fetching process. Update these states
based on different stages of the component\'s lifecycle, such as when
data fetching is initiated, when data is successfully fetched, or when
an error occurs. The useEffect hook can be helpful for managing side
effects, such as API requests, in functional components.

# \[Task\] Develop Integration Tests for Home Component

## Description 

Write integration tests to ensure the Home component displays data
correctly using mocked API responses. The tests should cover scenarios
such as displaying movies correctly based on mocked data and handling
API errors appropriately.

These integration tests ensure that the Home component functions as
expected in different scenarios, providing confidence in its behavior
when integrated with the application. The use of mocked API responses
allows for controlled testing of various conditions, including both
successful and error states.

## Acceptance Criteria

1.  Mock API Responses:

    a.  Utilize a testing library such as react-testing-library or
        > enzyme to mock API responses for the getMovies service used in
        > the Home component.

2.  Successful Data Display:

    a.  Write a test to ensure that the Home component correctly
        > displays movies based on mocked data.

    b.  Use mocked data that represents various scenarios, such as
        > different movies with diverse properties.

3.  Loader Display:

    a.  Verify that a loader (e.g., a spinner) is displayed when data is
        > being fetched (isLoading is true).

4.  Error Handling:

    a.  Write a test to simulate an API error during data fetching.

    b.  Ensure that the Home component appropriately handles the error
        > by displaying an error message or notification.

5.  Clean-up and Isolation:

    a.  Ensure that each test case has proper clean-up and isolation to
        > avoid interference between tests.

    b.  Use testing utilities to reset state between tests.

## Definition of Done

1.  Integration tests for the Home component are developed using a
    > testing library.

2.  Mock API responses are used to simulate various scenarios, including
    > successful data display and API errors.

3.  The tests pass successfully, validating that the Home component
    > displays data correctly and handles API errors appropriately.

4.  Clean-up and isolation mechanisms are in place to maintain test
    > reliability.

# \[User Story\]: Movie list paginated

## Description

As a user, I want to browse the catalog of the peĺículas divided into
pages.

## Tasks

\[Task\] Enhance getMovies Function for Pagination Support

\[Task\] Develop Pagination React Component

\[Task\] Enhance Home Component for Pagination Support

## Definition of Done

1.  When visiting our deployed application you must visualize the movie
    > catalog and navigate between pages..

# \[Task\] Enhance getMovies Function for Pagination Support

## Description:

Enhance the getMovies service function to support pagination by
receiving an object as a parameter with the structure { filters: { page:
number } }. This allows fetching data from the API with pagination
parameters.

Now, the function should return a Promise resolving an object with the
structure {metaData: { pagination:{currentPage:number,
totalPages:number}}, movies: Movie\[\]}. This is necessary to include in
the output not only the array of movies but also the total number of
pages.

This task ensures that the getMovies function is enhanced to support
pagination, allowing for more flexible data fetching from the API with
the ability to specify page numbers. The default pagination behavior is
also implemented for ease of use.

## Acceptance Criteria:

1.  Parameter Structure:

    a.  Modify the getMovies function to accept an object parameter.

    b.  The parameter should have a property named filters which is an
        > object with a property named page of type number.

2.  API Request Modification:

    a.  Adjust the API request within the getMovies function to include
        > the page parameter based on the provided filters.

3.  Default Pagination:

    a.  Implement a default value for the page parameter in case it is
        > not provided. For example, set a default value of 1.

4.  Return Structure Modification:

    a.  Modify the return of the getMovies function to a Promise
        > resolving an object with the structure {metaData: {
        > pagination:{currentPage:number, totalPages:number}}, movies:
        > Movie\[\]}.

5.  Unit Testing:

    a.  Write unit tests for the modified getMovies function to ensure
        > it handles pagination correctly.

    b.  Include test cases for providing different page numbers and
        > testing the default pagination behavior.

## Definition of Done:

1.  The getMovies function is modified to accept an object parameter
    > with the structure { filters: { page: number } }.

2.  The API request within the function is adjusted to include the
    > pagination parameter based on the provided filters.

3.  A default value for the page parameter is implemented.

4.  The return of the getMovies function is modified to a Promise
    > resolving an object with the structure {metaData: {
    > pagination:{currentPage:number, totalPages:number}}, movies:
    > Movie\[\]}.

5.  Unit tests for the modified getMovies function pass successfully,
    > covering various pagination scenarios.

# \[Task\] Develop Pagination React Component

## **Description:** 

Create a React component named Pagination to display a pagination UI
control. The component should receive the following props:

1.  onSelectPage:

    a.  Type: Function

    b.  Description: A callback function to be called with the clicked
        > page number when a user selects a new page.

2.  currentPage:

    a.  Type: Number

    b.  Description: The current page number.

3.  totalPages:

    a.  Type: Number

    b.  Description: The total number of pages.

This task ensures the creation of a reusable Pagination component that
can be easily integrated into the application to provide a user-friendly
pagination UI. The component\'s behavior is designed to handle click
events and disable navigation for invalid pages.

## Acceptance Criteria:

1.  Component Creation:

    a.  Create a file named Pagination.tsx within the components folder.

    b.  Develop the Pagination component using functional component
        > syntax.

2.  Props Validation:

```{=html}
<!-- -->
```
a.  Validate the incoming props to ensure that they have the correct
    > types (onSelectPage is a function, currentPage and totalPages are
    > numbers).

```{=html}
<!-- -->
```
3.  Pagination UI:

```{=html}
<!-- -->
```
a.  Display a set of pagination buttons based on the total number of
    > pages.

b.  Highlight the button corresponding to the current page.

```{=html}
<!-- -->
```
4.  Click Event Handling:

```{=html}
<!-- -->
```
a.  Implement click event handling for pagination buttons.

b.  Call the onSelectPage callback with the clicked page number.

```{=html}
<!-- -->
```
5.  Disable Navigation for Invalid Pages:

```{=html}
<!-- -->
```
a.  Disable the \"Previous\" button if the current page is the first
    > page.

b.  Disable the \"Next\" button if the current page is the last page.

```{=html}
<!-- -->
```
6.  Unit Testing:

```{=html}
<!-- -->
```
a.  Write unit tests for the Pagination component, covering scenarios
    > such as clicking on pagination buttons and validating UI changes
    > based on different props.

## Definition of Done:

1.  The Pagination.tsx file is created within the components folder.

```{=html}
<!-- -->
```
4.  The Pagination component is developed using functional component
    > syntax.

5.  Incoming props are validated to ensure correct types.

6.  Pagination UI is displayed with correct button highlighting based on
    > the current page.

7.  Click event handling is implemented to call the onSelectPage
    > callback with the clicked page number.

8.  Navigation buttons are disabled appropriately for the first and last
    > pages.

9.  Unit tests for the Pagination component pass successfully, covering
    > various scenarios.

# \[Task\] Enhance Home Component for Pagination Support

## Description:

Enhance the Home component to support pagination when displaying movies.
Integrate the Pagination component, call the getMovies service each time
the user clicks on a new page by changing a new state to track
pagination. The structure of this new state should be { filters: {
pagination: { currentPage: number, totalPages: number } } }.

This task ensures that the Home component is enhanced to support
pagination, providing a more dynamic and user-friendly experience when
navigating through movie data. The integration of he Pagination
component allows users to easily switch between pages, triggering the
fetching of data for the selected page.

**///////////////// query Params Version**

Enhance the Home component to support pagination when displaying movies.
Integrate the Pagination component, call the getMovies service each time
the queryParams in the url change, you will need to to use the hook
"useQuery" to be able to detect the changes in the URL an the set the
correct state

You need to add this new state { filters: { pagination: { currentPage:
number, totalPages: number } }

Each time the user clicks on the page button you need to navigate to the
new URL.

Your URL should looks like this "/?currentPage=X"

NOTE: totalPages should update when you have the answer from the API

## Acceptance Criteria:

1.  State Definition:

    a.  Define a new state named filter using the useState hook.

    b.  The structure of the filter state should be { filters: {
        > pagination: { currentPage: number, totalPages: number } } }.

2.  Pagination Component Integration:

    a.  Integrate the Pagination component within the Home component,
        > passing the necessary props such as onSelectPage, currentPage,
        > and totalPages.

3.  Pagination State Update:

    a.  Update the filter state each time the user clicks on a new page
        > using the onSelectPage callback.

    b.  Query Params Version: update the queryParm currentPage state
        > each time the user clicks on a new page using the onSelectPage
        > callback.

    c.  When the URL change you need to update the filter state

4.  Fetch Movie Data on Page Change:

    a.  Modify the getMovies function call in the Home component to
        > include the current page from the filter state.

5.  Unit Testing:

    a.  Write unit tests for the updated Home component, covering
        > scenarios such as changing pages, updating the filter state,
        > and ensuring that the getMovies service is called with the
        > correct parameters.

## Definition of Done:

1.  The filter state is defined within the Home component with the
    > structure { filters: { pagination: { currentPage: number,
    > totalPages: number } } }.

2.  The Pagination component is integrated within the Home component,
    > passing the necessary props.

3.  The filter state is appropriately updated each time the user clicks
    > on a new page.

4.  The getMovies function in the Home component is modified to include
    > the current page from the filter state.

5.  Unit tests for the updated Home component pass successfully,
    > covering various pagination scenarios.

# \[User Story\]: Filter and sort

## Description

As a user I want to be able to filter the movies by genre as well as
sort them by year in ascending and descending order.

## Tasks

\[Task\] Implement Movie Genre Transformation Function

\[Task\] Implement getMovieGenreData Function for Fetching Movie Genres

\[Task\] Enhance getMovies Function for Filtering and Sorting Support

\[Task\] Enhance formatMovie Function for Additional Genres Key

\[Task\] Modify MovieCard Component to Display Movie Genres

\[Task\] Develop ListOptions React Component

\[Task\] Enhance Home Component to Integrate ListOptions Components

## Definition of done

1.  The user must be able to filter the catalog by genre.

2.  User must be able to remove the filter to view unfiltered movies

3.  User must be able to Sort ascendingly the catalog by Year

4.  User must be able to Sort descending the catalog by Year

5.  User must be able to remove the sorting to view the movies without
    > sorting

# \[Task\] Implement Movie Genre Transformation Function

## Description:

Create a function named formatGenre into src/utils/transformers.ts file
to transform an array of API genre data models into a JavaScript
[[Map]{.underline}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
The
[[Map]{.underline}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
should have keys representing the genre ids and values representing the
genre names.

This transformation enhances the usability of genre data by providing a
key-value mapping for quick lookups.

## Acceptance Criteria:

1.  Function Signature:

    a.  Create a function named formatGenre into
        > src/utils/transformers.ts.

2.  Parameters:

    a.  The function should accept an array of API genre data models as
        > input.

3.  Return Type:

    a.  The function should return a JavaScript
        > [[Map]{.underline}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

4.  Map Structure:

    a.  The keys of the Map should be the ids of the genres.

    b.  The values of the Map should be the names of the genres.

5.  Example:

    a.  For example, given the following input:\
        > \[

> { id: 28, name: \'Action\' },
>
> { id: 35, name: \'Comedy\' },
>
> { id: 18, name: \'Drama\' },
>
> \]
>
> The function should return a Map:
>
> new Map(\[
>
> \[28, \'Action\'\],
>
> \[35, \'Comedy\'\],
>
> \[18, \'Drama\'\],
>
> \]);

6.  Handling Empty Input:

```{=html}
<!-- -->
```
a.  Ensure the function gracefully handles an empty input array,
    > returning an empty Map.

**Definition of Done:**

1.  The formatGenre function is created into src/utils/transformers.ts

2.  The function takes an array of API genre data models as input.

3.  The function returns a JavaScript Map with keys representing genre
    > ids and values representing genre names.

4.  The function handles empty input gracefully, returning an empty Map.

# \[Task\] Implement getMovieGenreData Function for Fetching Movie Genres

## Description:

Implement a new function named getMovieGenreData to fetch a list of
movie genres from the /genre/movie/list endpoint. This function should
utilize the formatMovieGenre function to transform API movie genre data
into a JavaScript Map. The getMovieGenreData function should not receive
any parameters and should return a Promise resolving to the JavaScript
Map.

Implementing getMovieGenreData allows for the retrieval of movie genre
data from the API, and utilizing formatMovieGenre ensures a structured
and usable format for the genres in the form of a JavaScript Map.

## Acceptance Criteria:

1.  Function Signature:

    a.  Implement a function named getMovieGenreData within the
        > appropriate service file (e.g., movieService.ts).

2.  No Parameters:

    a.  The function should not receive any parameters.

3.  Return Type

    a.  The function should return a Promise that resolves to the
        > JavaScript Map created using formatMovieGenre.

4.  API Request:

    a.  Utilize an API request to fetch data from the /genre/movie/list
        > endpoint.

5.  Data Transformation:

    a.  Use the formatMovieGenre function to transform the fetched API
        > movie genre data into a JavaScript Map.

6.  Unit Testing:

    a.  Write unit tests for the getMovieGenreData function, including
        > test cases for a successful API request, error handling, and
        > correct data transformation.

## Definition of Done:

1.  The getMovieGenreData function is implemented and resides within the
    > appropriate service file.

2.  The function utilizes an API request to fetch data from the
    > /genre/movie/list endpoint.

3.  The fetched API movie genre data is transformed into a JavaScript
    > Map using the formatMovieGenre function.

4.  API responses are handled appropriately, including error scenarios.

5.  The formatMovieGenre function is applied to transform API movie
    > genre data to a JavaScript Map.

6.  Unit tests for the formatMovieGenre function pass successfully,
    > covering various scenarios.

# \[Task\] Enhance getMovies Function for Filtering and Sorting Support

## Description:

Enhance the getMovies service function to support filtering and sorting
by receiving an object as a parameter. The new parameter structure
should be { filters: { page: number, genre: number \| null, releaseSort:
\'asc\' \| \'desc\' \| null } }.

This enhancement enables more precise data fetching from the API by
allowing users to specify page numbers, genre filters, and sorting
orders.

## Acceptance Criteria:

1.  Function Signature:

    a.  Enhance the existing getMovies function to accept an object
        > parameter.

2.  Parameter Structure:

    a.  The parameter should have a property named filters which is an
        > object with the following properties:

        i.  page: A property of type number representing the page
            > number.

        ii. genre: A property of type number or null representing the
            > genre filter. If null, no genre filtering is applied.

        iii. releaseSort: A property of type string (\'asc\', \'desc\',
             > or null) representing the sorting order. If null, no
             > sorting is applied.

3.  API Request Modification:

    a.  Adjust the API request within the getMovies function to include
        > filtering and sorting based on the provided parameters.

4.  Default Values:

    a.  Implement default values for genre and releaseSort in case they
        > are not provided. For example, set default values of null for
        > both.

5.  Unit Testing:

    a.  Write unit tests for the modified getMovies function to ensure
        > it correctly handles filtering and sorting scenarios.

    b.  Include test cases for providing different page numbers, genre
        > filters, and sorting orders.

## Definition of Done:

1.  The getMovies function is enhanced to accept an object parameter
    > with the structure { filters: { page: number, genre: number \|
    > null, releaseSort: \'asc\' \| \'desc\' \| null } }.

2.  The API request within the function is adjusted to include filtering
    > and sorting based on the provided parameters.

3.  Default values for genre and releaseSort are implemented.

4.  Unit tests for the modified getMovies function pass successfully,
    > covering various filtering and sorting scenarios.

# \[Task\] Enhance formatMovie Function for Additional Genres Key

## Description

Modify the formatMovie function to enhance the Movie business model by
adding an additional genres key. This key must be an array of strings
containing the names of the movie genres based on the genre_ids key of
the Movie Data API. The updated formatMovie function should now receive,
as a parameter, the JavaScript Map generated by the formatMovieGenre
function.

Modifying the formatMovie function to include genre names as an array
ensures that the enhanced Movie business model reflects the associated
genres based on the genre_ids from the Movie Data API. This improvement
enhances the richness of the Movie model.

## Acceptance Criteria

1.  Function Signature:

    a.  Modify the existing formatMovie function to accept an additional
        > parameter, a JavaScript Map generated by formatMovieGenre.

2.  Additional Genres Key:

    a.  Enhance the Movie business model by adding an additional key
        > named genres.

    b.  The genres key should be an array of strings containing the
        > names of the movie genres based on the genre_ids key from the
        > Movie Data API.

3.  Parameter Example:

    a.  The updated formatMovie function should receive the JavaScript
        > Map generated by the formatMovieGenre function as a parameter.

4.  Example Input and Output:

    a.  Example Input:

> formatMovie(
>
> {
>
> id: 123,
>
> title: \'Example Movie\',
>
> genre_ids: \[28, 35\],
>
> // other movie data\...
>
> },
>
> new Map(\[
>
> \[28, \'Action\'\],
>
> \[35, \'Comedy\'\],
>
> // other genre data\...
>
> \])
>
> );
>
> Example Output:
>
> {
>
> id: 123,
>
> title: \'Example Movie\',
>
> genres: \[\'Action\', \'Comedy\'\],
>
> // other enhanced movie data\...
>
> }

## Definition of Done:

1.  The formatMovie function is modified to accept an additional
    > parameter, a JavaScript Map generated by formatMovieGenre.

2.  The Movie business model is enhanced by adding an additional key
    > named genres.

3.  The genres key is an array of strings containing the names of the
    > movie genres based on the genre_ids key from the Movie Data API.

4.  The modified formatMovie function successfully produces the enhanced
    > Movie business model.

# \[Task\] Modify MovieCard Component to Display Movie Genres

## Description:

Modify the existing MovieCard React component to include the display of
movie genres.

Modifying the MovieCard component to display movie genres enhances the
user interface by providing additional information about the movie. This
improvement contributes to a more comprehensive and informative
representation of each movie within the application.

## Acceptance Criteria:

1.  Component Modification:

    a.  Modify the existing MovieCard component to incorporate the
        > display of movie genres.

2.  UI Enhancement:

    a.  Integrate the genres key from the Movie business model into the
        > component\'s UI.

    b.  Display the movie genres alongside other movie details (e.g.,
        > title, poster, release year).

3.  Responsive Design:

    a.  Ensure that the UI modification for displaying movie genres is
        > responsive and visually appealing across various screen sizes.

4.  Testing:

    a.  Write unit tests for the modified MovieCard component to ensure
        > it accurately displays movie genres.

    b.  Include test cases for different scenarios, such as movies with
        > multiple genres or no genres.

## Definition of Done:

1.  The MovieCard component is modified to include the display of movie
    > genres.

2.  The movie genres are integrated into the component\'s UI alongside
    > other movie details.

3.  The UI modification is responsive and visually appealing across
    > various screen sizes.

4.  Unit tests for the modified MovieCard component pass successfully,
    > covering different scenarios related to the display of movie
    > genres.

# \[Task\] Develop ListOptions React Component

## Description:

Create a React component named ListOptions that allows the user to
select an item from a list of options and clear the selection.

This task ensures the creation of a reusable ListOptions component that
allows users to select an option from a dropdown and clear the selection
when needed. The component\'s behavior is designed to handle user
interactions and provide a seamless user experience.

## Acceptance Criteria:

1.  Component Creation:

    a.  Create a file named ListOptions.tsx within the components
        > folder.

2.  Props: The component should receive the following props:

    a.  **options:**

        -   Type: Array of objects { value: string, label: string }

        -   Description: An array of options where each option is an
            > object with value and label properties.

    b.  **onChange:**

        -   Type: Function

        -   Description: A callback function to be called when selecting
            > an option. It should receive the selected option as a
            > parameter.

    c.  **selectedOption:**

        -   Type: Object { value: string, label: string } or null

        -   Description: Represents the currently selected option. It
            > can be null if no option is selected.

    d.  **onClear:**

        -   Type: Function

        -   Description: A callback function to be called when the user
            > removes the selection.

3.  Dropdown UI:

    a.  Display a dropdown/select input containing the provided options.

    b.  Highlight the selected option in the dropdown.

4.  Option Selection:

    a.  Implement the ability to select an option from the dropdown.

    b.  Call the onChange callback with the selected option.

5.  Clear Selection:

    a.  Include a button or icon to clear the current selection.

    b.  Call the onClear callback when the user clicks to remove the
        > selection.

6.  Unit Testing:

    a.  Write unit tests for the ListOptions component, covering
        > scenarios such as selecting an option, clearing the selection,
        > and validating UI changes.

## Definition of Done:

1.  The ListOptions.tsx file is created within the components folder.

2.  Dropdown UI is displayed with correct highlighting for the selected
    > option.

3.  The ability to select an option and clear the selection is
    > implemented.

4.  Unit tests for the ListOptions component pass successfully, covering
    > various scenarios.

# \[Task\] Enhance Home Component to Integrate ListOptions Components

## **Description:** 

Enhance the Home component to integrate two instances of the ListOptions
component. One instance will display a list of movie genres using the
getMovieGenreData service, and the other will display a static list of
two sorting options: asc and desc. When selecting an option from each
ListOptions component, the getMovies service should be called
appropriately to filter and sort the list of movies. The structure of
the state should change to hold the selected filter and sort options: {
filters: { pagination: { currentPage: number, totalPages: number },
genres: { value: string, label: string }, sort: { value: string, label:
string } } }.

This task ensures that the Home component is enhanced to provide a more
interactive and dynamic user experience by integrating two instances of
the ListOptions component for filtering and sorting movies based on
genres and sorting options. The state is appropriately updated to handle
the selected options.

## Acceptance Criteria:

1.  State Structure:

    a.  Update the structure of the state in the Home component to hold
        > selected filter and sort options.

    b.  The state structure should be: { filters: { pagination: {
        > currentPage: number, totalPages: number }, genres: { value:
        > string, label: string }, sort: { value: string, label: string
        > } } }.

2.  Integration with ListOptions:

    a.  Integrate two instances of the ListOptions component within the
        > Home component.

    b.  One instance should display a list of movie genres using the
        > getMovieGenreData service.

    c.  The other instance should display a static list of two sorting
        > options: asc and desc.

3.  ListOptions Props:

    a.  Pass the necessary props to each ListOptions instance:

        i.  For the genre options, use the getMovieGenreData service and
            > pass the onChange callback to handle genre selection.

        ii. For the sorting options, pass a static array of options (asc
            > and desc) and the onChange callback to handle sorting
            > selection.

4.  Service Calls:

    a.  Update the getMovies service calls in the Home component to
        > include the selected filter and sort options.

    b.  Call the service appropriately when the user selects options
        > from the ListOptions components.

5.  Unit Testing:

    a.  Write unit tests for the updated Home component, covering
        > scenarios such as selecting genres, selecting sorting options,
        > and validating service calls.

## Definition of Done:

1.  The state structure in the Home component is updated to hold
    > selected filter and sort options.

2.  Two instances of the ListOptions component are integrated within the
    > Home component.

3.  Props are passed to each ListOptions instance, including options and
    > callbacks.

4.  Service calls in the Home component are updated to include selected
    > filter and sort options.

5.  Unit tests for the updated Home component pass successfully,
    > covering various scenarios.

6.  The code is well-documented, adheres to coding standards, and
    > includes comments where necessary.

# \[User Story\]: Movie details

## Description

As a user, I want to be able to view detailed information about a movie,
so that I can make informed decisions about whether to watch it.

## Tasks

\[Task\] Develop getMovieDetail Function

\[Task\] Enhance MovieCard React Component with onClick Prop

\[Task\] Create MovieDetailCard React Component

\[Task\] Create MovieDetail React Component

\[Task\] Integrate Home Component with MovieDetail Component

## Definition of done

1.  Users can navigate to the movie details page from the movie list or
    > any relevant section.

2.  Movie details are displayed prominently, providing comprehensive
    > information about the selected movie.

3.  Users can easily navigate back to the previous page.

# \[Task\] Develop getMovieDetail Function

## Description:

Develop a function named getMovieDetail to fetch data of a single movie
by id from The Movie DB\'s \"/movie/{movie_id}\" endpoint. The function
should receive a parameter id and return a Promise resolving to a
business model Movie. Additionally, utilize the formatMovie function to
transform API movie data to the business model Movie.

This task ensures the development of the getMovieDetail function,
allowing the application to fetch detailed information about a single
movie by id from The Movie DB\'s API. The integration of the formatMovie
function ensures consistent data transformation for the business model.

## Acceptance Criteria:

1.  Function Signature:

    a.  Create a function named getMovieDetail within the appropriate
        > service file (e.g., movieService.ts).

2.  Parameter:

    a.  The function should receive a parameter named id representing
        > the id of the movie to fetch.

3.  Return Type:

    a.  The function should return a Promise that resolves to a business
        > model Movie.

4.  API Request:

    a.  Utilize a HTTP client library to make a GET request to The Movie
        > DB\'s /movie/{movie_id} endpoint.

    b.  Include the API token in the request headers, retrieved from the
        > configuration loader.

5.  Data Transformation:

    a.  Utilize the formatMovie function to transform API movie data to
        > the business model Movie.

6.  Unit Testing:

    a.  Write unit tests for the getMovieDetail function to ensure
        > correct API request, parameter handling, and data
        > transformation.

## Definition of Done:

1.  The getMovieDetail function is implemented and resides within the
    > appropriate service file.

2.  The function receives a parameter named id representing the id of
    > the movie and returns a Promise that resolves to a business model
    > Movie.

3.  The function successfully makes a GET request to The Movie DB\'s
    > /movie/{movie_id} endpoint with the API token.

4.  API responses are handled appropriately, including error scenarios.

5.  The formatMovie function is utilized to transform API movie data to
    > the business model Movie.

6.  Unit tests for the getMovieDetail function pass successfully,
    > covering various scenarios.

# \[Task\] Enhance MovieCard React Component with onClick Prop

## Description

Enhance the MovieCard React component by adding a new prop named
onClick. This prop will be a callback function to be called when the
user clicks on the movie card.

This task ensures that the MovieCard component is enhanced to provide a
more interactive experience by allowing the parent component to define
custom behavior when the user clicks on the movie card. The addition of
the onClick prop increases the flexibility of the component for
different use cases.

## Acceptance Criteria

1.  Prop Addition:

    a.  Add a new prop named onClick to the MovieCard component.

2.  Callback Function:

    a.  The onClick prop should be a callback function that is called
        > when the user clicks on the movie card.

3.  User Interaction:

    a.  When the user clicks on the movie card, the onClick callback
        > function should be triggered.

4.  Flexibility:

    a.  The onClick prop should be flexible, allowing the parent
        > component to define custom behavior when the movie card is
        > clicked.

5.  Unit Testing:

    a.  Write unit tests for the MovieCard component to ensure that the
        > onClick prop works as expected.

    b.  Include test cases to verify that the callback function is
        > triggered on clicking the movie card.

## Definition of Done:

1.  The MovieCard component includes a new prop named onClick.

2.  The onClick prop is a callback function.

3.  The onClick callback function is triggered when the user clicks on
    > the movie card.

4.  Unit tests for the MovieCard component pass successfully, covering
    > various scenarios.

# \[Task\] Create MovieDetailCard React Component

## Description:

Create a React component named MovieDetailCard to display detailed
information about a single movie. The component should receive a
business model of a movie as a prop and display relevant information,
including the movie\'s poster, original title, synopsis, and release
year.

This task ensures the creation of a MovieDetailCard component that can
be easily integrated into the application to display detailed
information about a single movie. The component\'s flexibility allows it
to adapt to different movie models, providing a consistent and
informative user experience.

## Acceptance Criteria:

1.  Component Creation:

    a.  Create a file named MovieDetailCard.tsx within the components
        > folder.

2.  Props:

    a.  Define a prop named movie of type Movie representing the
        > business model of a movie.

3.  Display Information:

    a.  Utilize the information from the movie prop to display relevant
        > information about the movie, including but not limited to:
        > poster, original title, synopsis, rating, and release year.

4.  Unit Testing:

    a.  Write unit tests for the MovieDetailCard component to ensure
        > that it displays information correctly based on the provided
        > props.

## Definition of Done:

1.  The MovieDetailCard.tsx file is created within the components
    > folder.

2.  The component receives a prop named movie of type Movie.

3.  The component displays relevant information about the movie,
    > including the poster, original title, synopsis, rating and release
    > year.

4.  Unit tests for the MovieDetailCard component pass successfully,
    > covering various scenarios.

# \[Task\] Create MovieDetail React Component

## Description:

Create a React component named MovieDetail to integrate the
MovieDetailCard component with the getMovieDetail service. Display this
component on the route \"/movie/:id\" and implement features to show a
loader while fetching data from the API and display a notification in
the case of an error. Extract the id of the movie from the URL and use
it in the getMovieDetail service. Provide a way for the user to navigate
back to the Home component from the MovieDetail component.

This task ensures the creation of a MovieDetail component that
integrates the MovieDetailCard component with the getMovieDetail
service. It provides a detailed view of a single movie based on its id,
handling loading and error states gracefully.

## Acceptance Criteria:

1.  Component Creation:

    a.  Create a file named MovieDetail.tsx within the components
        > folder.

2.  Integration with MovieDetailCard:

    a.  Integrate the MovieDetailCard component within the MovieDetail
        > component.

3.  Service Integration:

    a.  Use the getMovieDetail service to fetch detailed information
        > about the movie based on its id.

    b.  Extract the movie id from the URL (route parameter).

4.  Loader Display:

    a.  Display a loader (e.g., a spinner) while fetching data from the
        > API.

5.  Error Handling:

    a.  Implement error handling to display a notification in case of an
        > error during data fetching.

6.  Navigation Back:

    a.  Provide a clear and intuitive way for the user to navigate back
        > to the Home component.

7.  Route Configuration:

    a.  Configure the route for the MovieDetail component to be
        > \"/movie/:id\", where \":id\" is the id of the movie.

8.  Unit Testing:

    a.  Write unit tests for the MovieDetail component to ensure correct
        > integration with the MovieDetailCard, proper data fetching,
        > and error handling.

## Definition of Done:

1.  The MovieDetail.tsx file is created within the components or pages
    > folder.

2.  The MovieDetail component is developed using functional component
    > syntax.

3.  The MovieDetailCard component is integrated within the MovieDetail
    > component.

4.  The getMovieDetail service is used to fetch detailed information
    > about the movie based on its id.

5.  The movie id is extracted from the URL (route parameter) and used in
    > the service call.

6.  A loader is displayed while fetching data from the API.

7.  Error handling is implemented to display a notification in case of
    > an error during data fetching.

8.  The route for the MovieDetail component is configured to be
    > \"/movie/:id\".

9.  Unit tests for the MovieDetail component pass successfully, covering
    > various scenarios.

# \[Task\] Integrate Home Component with MovieDetail Component

## Description:

Integrate the Home component with the MovieDetail component so that when
a user clicks on a movie, the app redirects the user to the
\"/movie/:id\" URL to display detailed information about the selected
movie. Utilize the React Router hook useNavigate to accomplish this.
Configure the onClick prop of the MovieCard component properly for
navigation.

This task ensures the seamless integration of the Home component with
the MovieDetail component, allowing users to navigate to detailed
information about a selected movie when clicked. The use of useNavigate
and proper configuration of the onClick prop facilitate a smooth user
experience.

## Acceptance Criteria:

1.  Navigation Setup:

    a.  Utilize the React Router hook useNavigate in the Home component
        > to enable navigation.

2.  onClick Prop Configuration:

    a.  Configure the onClick prop of the MovieCard component in the
        > Home component to trigger navigation to the \"/movie/:id\"
        > URL.

3.  Unit Testing:

    a.  Write unit tests for the Home component to ensure that clicking
        > on a movie triggers the correct navigation and renders the
        > MovieDetail component.

## Definition of Done:

1.  The useNavigate hook is utilized in the Home component to enable
    > navigation.

2.  The onClick prop of the MovieCard component in the Home component is
    > configured to trigger navigation to the \"/movie/:id\" URL.

3.  The MovieDetail component is integrated into the route
    > \"/movie/:id\" to display detailed information about the selected
    > movie.

4.  Unit tests for the Home component pass successfully, covering
    > various scenarios.
