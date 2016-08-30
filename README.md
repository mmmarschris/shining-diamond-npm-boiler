# shining-diamond-npm-boiler

A boilerplate exercise using NPM as a build tool.

## Requirements

* Node.js
* NPM

## List of packages used

* [Susy](https://github.com/oddbird/susy)
* [Babel](https://github.com/babel/babel)
* [autoprefixer](https://github.com/postcss/autoprefixer)
* [browser-sync](https://github.com/Browsersync/browser-sync)
* [eslint](https://github.com/eslint/eslint) (Disabled)
* [imagemin-cli](https://github.com/imagemin/imagemin-cli)
* [node-sass](https://github.com/sass/node-sass)
* [onchange](https://github.com/Qard/onchange)
* [npm-run-all](https://github.com/mysticatea/npm-run-all)
* [postcss-cli](https://github.com/code42day/postcss-cli)
* [svgo](https://github.com/svg/svgo)
* [svg-sprite-generator](https://github.com/frexy/svg-sprite-generator)
* [uglify-js](https://github.com/mishoo/UglifyJS2).

## Install

`$ npm install`

## tl;dr ayy lmao

`$ npm run watch:all`

## Run, Node, Run

There are a number of tasks listed below.

Each task can be run from the command line by typing:

`$ npm run [task]`

where `[task]` is replaced by one of the options below. For example:

`$ npm run clean`

### `clean`
  Delete existing dist files

### `autoprefixer`
  Add vendor prefixes to your CSS automatically

### `babel`
  Run your ES6 JS through Babel and save a converted file to `dist/js`

### `scss`
  Compile Scss to CSS

### `lint`
  "Lint" your JavaScript to enforce a uniform style and find errors

### `uglify`
  Uglify (minify) a production ready bundle of JavaScript

### `imagemin`
  Compress all types of images

### `icons`
  Compress separate SVG files and combine them into one SVG "sprite"

### `serve`
  Start a new server and watch for CSS & JS file changes in the `dist` folder

### `build:public`
  Move files in the `/src/public/` folder, such as `favicon.ico`, into the `/dist/` folder

### `build:css`
  Alias to run the `scss` and `autoprefixer` tasks. Compiles Scss to CSS & add vendor prefixes

### `build:js`
  Alias to run the `babel`, `concat` and `uglify` tasks. Lints JS, combines `src` JS files & uglifies the output

### `build:images`
  Alias to run the `imagemin` and `icons` tasks. Compresses images, generates an SVG sprite from a folder of separate SVGs

### `build:all`
  Alias to run all of the `build` commands

### `watch:css`
  Watches for any .scss file in `src` to change, then runs the `build:css` task

### `watch:js`
  Watches for any .js file in `src` to change, then runs the `build:js` task

### `watch:images`
  Watches for any images in `src` to change, then runs the `build:images` task

### `watch:all`
  Run the following tasks simultaneously: `serve`, `watch:css` & `watch:js`. When a .scss or .js file changes in `src`, the task will compile the changes to `dist`, and the server will be notified of the change. Any browser connected to the server will then inject the new file from `dist`

### `postinstall`
  Runs `watch:all` after `npm install` is finished

## Credits

Based on the work of, & inspired by:

* ["How to use NPM as a Build Tool"](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool)
* ["npm-build-boilerplate"](https://github.com/damonbauer/npm-build-boilerplate)
* ["Why I Left Gulp and Grunt for npm Scripts"](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.opjyuobgn)