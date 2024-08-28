<h1 align="center">
<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" align="left" width="75">
React State Introduction
<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" align="right" width="75"></h1>


## Intro
This project introduces the basic concepts of React and JSX. It displays the benefits of decomposing your site into smaller and declarative components that can be reused. This is also the first project of my last trimester at Atlas School, and introduces the beginner concepts of web user interfaces. 

## Learning Objectives

1. **How to perform local development for React apps**

2. **How to create React components with JSX**

3. **How React `props` work**

4. **How to build and deploy a React app to the cloud**

&nbsp;
---
&nbsp;

## Resources and Descriptions


### [Hello React - Jeremiah Swank](https://atlas-jswank.github.io/blog/hello-react/)
Getting started with react,components, props, and vite.

### [What is JSX? - Jeremiah Swank](https://atlas-jswank.github.io/blog/jsx/)
Explores the syntax of JSX with React.

### [ES Modules - Jeremiah Swank*](https://atlas-jswank.github.io/blog/es-modules/)
An explanation of how modules work in modern JavaScript.

### [Vite - A Build Tool for Modern Web Projects](https://vitejs.dev/guide/)
A tool to help build a faster and leaner development experience for web projects. Very useful for React apps!

### [React Developer Tools - Chrome Extension](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
A chrome extension to enhance the Chrome Developer Tools for debugging and organization.

&nbsp;
---
&nbsp;

## Getting Started

- Run `npm install` to install dependencies
- Run `npm run dev` to start the dev server
- Open `http://localhost:5173` in a browser

### Dev Container

There is a dev container preconfigured with Node 20 on linux. If you would like to use the dev container:

- Install the [Dev Containers Plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code
- Open the command pallet (Cntrl / Command + Shift + P) in VS Code
- Select "Dev Container: Reopen in Container"

For more information on using dev containers see this [tutorial](https://atlas-jswank.github.io/blog/dev-containers/) or the [official documentation](https://containers.dev/)

### Important Files/Folders

- `index.html`: This is the html file that appears when the dev server starts up.
- `src`: All javascript/jsx code goes in this directory
- `src/assets`: Any static assets such as images that are loaded through the javascript files goes here.
- `src/app.jsx`: The is the main app component for the entire app.

### Important Commands

- `npm run dev`: Starts dev server with Hot Module Reloading on port 5173. Anytime a file changes, the changes will automatocally be reflected in the browser
- `npm run lint`: Run the lint checker with eslint to check for known linting issues
- `npm run format`: Run prettier to automatically reformat files
