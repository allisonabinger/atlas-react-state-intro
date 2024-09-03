<h1 align="center">
<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" align="left" width="75">
React State: Introduction
<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" align="right" width="75"></h1>

&nbsp;
&nbsp;
&nbsp;

This project introduces the concepts of state, effects, and context in React by building a student catalog and schedule builder app. It will serve as a basic introduction to state management in React by using the built-in state management methods. The student catalog and school course directory app will load courses from an API, build tables that are searchable, sortable, and support pagination, and allow users to drop and enroll courses from within the app. Bonus features are the inability to add courses if they are already added, as well as a playful warning about not enrolling in too many classes. 

## Learning Objectives

1. **How to manage `state` in React components**

2. **React `hooks`: useState, useEffect, and useContext**

3. **Using Context Providers to avoid prop drilling**

---

## Resources and Descriptions


### [React State: useState - Jeremiah Swank](https://atlas-jswank.github.io/blog/react-state/)
Getting started with react state management.

### [React State: useEffect- Jeremiah Swank](https://atlas-jswank.github.io/blog/react-state-effects/)
Passing data down the component tree without prop drilling.

### [Vite - A Build Tool for Modern Web Projects](https://vitejs.dev/guide/)
A tool to help build a faster and leaner development experience for web projects. Very useful for React apps!

### [React Developer Tools - Chrome Extension](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
A chrome extension to enhance the Chrome Developer Tools for debugging and organization.

---

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


This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
