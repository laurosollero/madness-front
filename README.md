# Madbox - Frontend

This project was created as a home assignment test to evaluate my skills on a fullstack project.

## Documentation

I've decided to go with a React and Typescript as recommended on the documentation, with Webpack to ease the process up, with a bit of SASS sprinkled on top of styled-components.

Decided to go mainly with Functional Components and Hooks to make it clean, centralized the game context with most calculations and external calls and centralized game management.

On the styling I went with JS Objects bound to the components to simplify local stylings, have one global CSS file for main containers and some utility classes, and for a couple elements I actually went with styled components for the convenience for the button and the input boxes.

Talking about the input boxes I've found one interesting project to use multiple input boxes as one component (React Individual Character Input Boxes), had to rewrite the whole module for customization so I internalized the code.

### Points that should be improved:

Tests should be implemented on the project to ensure quality and stability, running it on the build process only deploying once every test passes.

Better security handling the calls, we should implement a token to authorize the communications with the backend.

Create a way to not crash if the API is not responding for any reason, right now it will just throw errors.

Work a bit on the looks of the app, I'm not completely sold on the visuals. Also the app could have improvements on accessibility, not only on UI/UX but also on some code.

It could have storybook to manage the styles, organize better the whole Design System, maybe could've based it on some existing DS base, but I kinda wanted to home cook it all.

There are some bugs if you enter the letters too fast, if you send twice, and they could all be fixed with some extra time and attention.

## How long it took for you to build this application

More than I would like to say, but on time for the requirement of the project. 😅

Remembering all Typescript details and structuring the project took me some extra 12 hours in total for the front and backend.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_BASE_ADDRESS`: backend address.

`REACT_PORT`: port to run dev app (default 3333).

## Running and building the project

Install dependencies:

```bash
  yarn install
```

Run the development server:

```bash
  yarn dev
```

Build the production version:

```bash
  yarn build
```

## Acknowledgements

- [React Individual Character Input Boxes](https://github.com/dannyradden/single-character-input-boxes)
