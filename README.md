# JLUE - JavaScript Glue

My defaults for project structure, package management, build and test tools,
semantic grid system and other libraries.

## Some goals

* Have single place to manage dependencies and build system across projects
* A canonical reference for my technology choices
* A potentially way to build up a simple, focused framework
* Best practice for Semantic HTML5, JS, CSS

## Features

* Sass files are all imported from sass/main.scss
* node_modules are not included in source control
* Let editors handle lint and checkStyle watching (still provide build step).
  npm handles watching sass and JS compression
* Watching contains debug info and source-maps
* Builds are production-ready

## Summary of libraries used

* [Normalize.css](http://necolas.github.io/normalize.css/)
* [FontAwesome](http://fortawesome.github.io/)
* [MongoDB](http://www.mongodb.org/)
* [request](https://github.com/mikeal/request)
* [sprintf-js](https://github.com/alexei/sprintf.js)
* [Node-Sass](https://github.com/sass/node-sass)
* [Nodemon](http://nodemon.io/)
* [Browserify](http://browserify.org/)
* [Jasmine](http://jasmine.github.io/2.0/introduction.html)
* [Nock](https://github.com/pgte/nock)
* [JSHint](http://www.jshint.com/)
* [JSCS](https://github.com/jscs-dev/node-jscs)
* [i18n-js](https://github.com/fnando/i18n-js)


## Summary of libraries NOT used

* Grunt, gulp, etc - npm does a fine job
* Bootstrap, Element UI, etc - I plan to use my own semantic grid and define
  my own minimal UI framework
* CoffeeScript - I believe JS can be beautiful enough
* JQuery - It's less important these days, speed gains using native,
  build my own, specific library
* Express - not sure what I need MVC-wise yet
* Component, Duo, etc - Browserify is enough for now


## Usage

Watches in debug mode (folder, source-maps, debugging, etc)

    npm run watch

Builds in production mode (compresses, no source-maps, no debugging)

    npm install

### Start a new project

    jlue new <folder>


### Update an existing project

    jlue update <folder>

or

    cd <folder>
    jlue update


## Inspired by

* http://clock.co.uk/blog/tools-for-unit-testing-and-quality-assurance-in-node-js
* http://substack.net/task_automation_with_npm_run
* http://www.lukeharrison.net/blog/create-a-sass-grid-system/
* http://www.smashingmagazine.com/2009/08/04/designing-a-html-5-layout-from-scratch/
* http://www.responsivegridsystem.com/


## TODO

- [ ] check source maps work
- [ ] test jasmine mocks
- [ ] test nock
- [ ] test mongodb
