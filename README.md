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

* [Browserify](http://browserify.org/) for getting node goodness on the frontend
* [FontAwesome](http://fortawesome.github.io/) for icons
* [i18n-js](https://github.com/fnando/i18n-js)
* [Jasmine](http://jasmine.github.io/2.0/introduction.html) for testing
* [JSHint](http://www.jshint.com/) for sanity
* [JSCS](https://github.com/jscs-dev/node-jscs) for more sanity
* [Nock](https://github.com/pgte/nock)
* [Nodemon](http://nodemon.io/) for watching stuff
* [Normalize.css](http://necolas.github.io/normalize.css/) for a browser baseline
* [Stylus](https://github.com/sass/node-sass) for stylesheets
* [PostgreSQL](http://www.postgresql.org/) for database
* [request](https://github.com/mikeal/request) for simple HTTP
* [sprintf-js](https://github.com/alexei/sprintf.js) for simple string manipulation
* [supertest]() not sure what for yet


## Summary of libraries NOT used

* Bootstrap, Element UI, etc - I plan to use my own semantic grid and define
  my own minimal UI framework
* CoffeeScript - I believe JS can be beautiful enough
* Grunt, gulp, etc - for simple tasks npm does a fine job
* JQuery - It's less important these days, speed gains using native,
  build my own, specific library
* Express - may use this depending on requirements
* Component, Duo, etc - Browserify is enough for now


## Usage

[NOT IMPLEMENTED YET]

### Start a new project

    jlue new <folder>


### Update an existing project

    jlue update <folder>

or

    cd <folder>
    jlue update


### Once in your created project you can do

Watches in debug mode (folder, source-maps, debugging, etc)

    npm run watch

Builds in production mode (compresses, no source-maps, no debugging)

    npm install

Start a server on port 8080

    npm start


## Rationale for some of my library choices

### Stylus - Stylesheets

Sass requires Ruby and Node-sass requires Visual Studio. So I looked elsewhere and found
Stylus. Clean syntax, feature-rich, decent support.

### Nodemon

Why does every library need to implement a watcher? Keep it light and consistent and use nodemon.




## Inspired by

* http://clock.co.uk/blog/tools-for-unit-testing-and-quality-assurance-in-node-js
* http://substack.net/task_automation_with_npm_run
* http://www.lukeharrison.net/blog/create-a-sass-grid-system/
* http://www.smashingmagazine.com/2009/08/04/designing-a-html-5-layout-from-scratch/
* http://www.responsivegridsystem.com/
* http://blog.modulus.io/using-npm-scripts-to-build-asset-pipeline


## TODO

- [ ] check source maps work
- [ ] test jasmine mocks
- [ ] test nock
- [ ] test postgres
- [ ] test features of all libraries
