## Install React

npm install react react-dom

## Other packages 

### install map library
npm install leaflet
npm install react-leaflet

### install icons library
npm install react-icons

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


# structure folders

## src/ folder
Main folder, where you mostly will work

App.css - styles for main app component

App.js - main app component, where you will include pages or components

App.test.js - tests for main app component

index.css - global styles

index.js - main entry file, where we render React app in the DOM

logo.svg - React logo used in main app component

reportWebVitals.js - script which can measure app performance

setupTests.js - file needed for test setup



## root/ folder
Root app folder

.gitignore - list of untracked files that shouldn’t be stored in Git repository

package.json - here you can find

useful script commands to run / build app, run test, etc

dependencies list (installed libraries and their versions)

package-lock.json

automatically generated file

provide more detailed information about all dependencies and their versions

help npm install exactly the same dependencies versions on different machines

README.md - It can be used for project summary and instructions (how to setup, run, test the project).



## public/ folder
Assets folder for static files like images, fonts, main HTML file. Static means those files shouldn’t be modified or processed during the build of app.

favicon.ico - it’s small icon in your browser tab associated with your website

index.html - entry point to your application in a browser, here can be included favicon file, some static meta tags. Also you can find here <div id="root" /> where will be rendered React application

logo192.png and logo512.png - React logos in different resolutions, it’s used for mobile devices or higher resolution displays

manifest.json - some metadata used for mobile devices in case user add website as an app icon

robots.txt - used to tell search engines like Google which pages should be publicly accessible and which should not.

node_modules folder
Used for storing all dependencies

