# React Local Storage

The starting code provided contains a simple todo application.
The goal of this exercise is to update the provided code to use localStorage in order to persist/store data in the browser.

App.js contains a class based component which includes a form used to setState of the todoItems array.

Start by installing the project node_modules using `npm i`, or `npm install`, then run `npm start` start the project.
Next open `App.js`, in the src folder, and review the existing code.
There are comments throughout App.js guiding/describing what needs to be added.

When the application runs and the App.js component mounts you can check to see if localStorage is set. If there is data stored in localStorage, then try to update the state object in App.js using `setState()`

You may need to review how to use:

- `localStorage.getItem()`
- `localStorage.setItem()`
- `JSON.parse()`
- `JSON.stringify()`

## Resources

- [MDN localStorage documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN JSON.stringify() documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [MDN JSON.parse() documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
