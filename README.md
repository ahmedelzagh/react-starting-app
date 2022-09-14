
# React Starting App

It's a Vite + React clean app, bundled with pre-configured custom hooks and UI components which are essential for any React Modern App.

## Demo

[View Live Demo](http://clean.aelzagh.com/)


## Table of Contents

* [Installation & Running](#installation--running)
* [Documentation](#documentation)
* [Styling](#styling)
* [Included Components](#included-components)
* [Adding Pages](#adding-pages-views)
* [Credits](#credits)
* [Contributing](#contributing)

## Installation & Running

Install react-starting-app with yarn
- Download project files as zip or Clone repo to your local machine
- Open the project folder with your favorite CLI or IDE integrated terminal
- Use the following commands:

to install all required dependencies
```
    yarn install
```
to run the app
```
    yarn dev
```
to build
```
    yarn build
```

## Documentation

### Styling
- Project includes an [index.css](/src/index.css) file which defines: Color scheme, font sizes & colors.
- Each component was styled using [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) to locally scope CSS class names.
- If the default color scheme is set to dark, UI components will be set to the light theme and vice versa.
- [Card](/src/components/UI/Card) and [LoadingSpinner](/src/components/UI/LoadingSpinner) Components accepts a variant prop which can be "dark" or "light" to override the default color scheme.
- [Button](/src/components/UI/Button) Component accepts a variant prop which can be set to "primary" or "secondary", the default is primary.
- Project includes responsive [Navigation Bar](/src/components/Layout/NavBar/NavBar.jsx) which is dynamically updated to include any new Route.

### Included Components
#### Included Custom Hooks:
- [useAsync](/src/hooks/use-async.js)
- [useFetch](/src/hooks/use-fetch.js)
- [useInput](/src/hooks/use-input.js)
- [useLocalStorage](/src/hooks/use-storage.js)
- [useSessionStorage](/src/hooks/use-storage.js)
- [useToggle](/src/hooks/use-toggle.js)
#### Included UI Components:
- [Button](/src/components/UI/Button/Button.jsx)
- [Card](/src/components/UI/Card/Card.jsx)
- [Form](/src/components/UI/Form/Form.jsx)
- [Input](/src/components/UI/Input/Input.jsx)
- [LoadingSpinner](/src/components/UI/LoadingSpinner/LoadingSpinner.jsx)
- [Modal](/src/components/UI/Modal/Modal.jsx)

#### Using Hooks & UI Components
To use any hook or UI component you can import it from the index.js file included in the folder.
```
// Importing UI Components:
import {Card, Button} from './components/UI';

// Importing Custom Hooks:
import {useToggle, useFetch} from './hooks';
```

### Adding Pages (Views)
To dynamically add a new page to app Routes and to the NavBar, make sure to import it within [index.js](/src/views/index.js) file located in the views folder, then add your page component besides its properties as an object in the exported array.
```
  { name: "about", show: true, path: "/about", element: About, props: {name: "AhmedElzagh" } },
```
## Credits

This app uses the following open source packages:

 - [React](https://reactjs.org/)
 - [React Router](https://reactrouter.com/en/main)
 - [Vite](https://vitejs.dev/)

## Contributing

***Contributions are always welcome!***

*You can contribute by following these steps:*
- Fork the repository
- Clone the forked repository into your local machine
- Create a new branch `git checkout -b new-branch-name`
- Make your changes or add anything, then verify that it's working as it should
- Use `git add /fileDirectory` to add the changed file/s to the Staging Area
- Create a commit `git commit -m "changes description"`
- Push the changes by using `git push origin new-branch-name`
- Go to your forked repository on github, Click on compare & pull request button
- Leave a comment if you want to, then Click Create pull request

## Contact

- Email: contact@aelzagh.com
- linkedIn: [Ahmed Elzagh](https://www.linkedin.com/in/ahmed-elzagh/)