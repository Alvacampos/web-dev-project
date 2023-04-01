Basic HTML, CSS and JS project.

# Wireframe

![alt text](./dist/assets/wireframe/wireframe.jpg)

# Installation

Run `npm i`

To turn on scss watcher do `npm run scss-watch`

Now with the addition of webpack things work a little different, for js compilation you should run `npm run build`
and for publishing changes in github pages you should run `npm run deploy -- -m "the msg you want"`

Source of information:

- https://www.learnhowtoprogram.com/intermediate-javascript/team-week/hosting-a-webpack-project-with-gh-pages
- https://webpack.js.org/guides/getting-started

# Project Structure

You have 3 main folders `dist/`, `src/` and `styles/`.

- dist will be for all all deployment files plus all the html views.
- src will be for all js files. There you will find a similar structure to the views in the app, there is a `/data/`folder that contains all hard coded data to be use in the app.
- styles contains all the .scss files for styling.

Keep in mind that this vanilla project uses webpack for bundling and the `main.js` file in there is a generated file and SHOULD NOT BE TOUCH.

--- JS course ---

The file chatbot.js contains the usage of localStorage, json and fetch\*
