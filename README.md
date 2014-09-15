# JLUE - JavaScript Glue

My defaults for project structure, package management, build and test tools, semantic grid system
and other libraries.

## Some goals

Have single place to manage dependencies across projects. A canonical reference for my technology
choices.

* Sass files are all imported from sass/main.sass
* node_modules are not included in source control
* Let editors handle lint and checkStyle watching (still provide build step)
* Watching contains debug info and source-maps
* Builds are production-ready

## Summary of tools

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


## Summary of tools NOT used

* Grunt, gulp, etc - npm does a fine job
* Bootstrap, Element UI, etc - My own semantic grid is enough and I prefer to define my own UI
* CoffeeScript - I believe JS can be beautiful enough
* JQuery - It's less important these days, speed gains using native, build my own, specific library
* Express - not got a good reason yet
* Component, Duo, etc - Component is deprecated and Duo is unproven.


## Usage

Watches in debug mode (folder, source-maps, debugging, etc)

    npm run watch

Builds in production mode (compresses, no source-maps, no debugging)

    npm run prepublish

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
