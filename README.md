# JLUE - JavaScript Glue

My defaults for project structure, package management, build and test tools,
UI framework and other libraries for responsive browser development.

## Some goals

* Have a single place to manage dependencies and build system across projects
* A canonical reference for my technology choices
* A way to potentially build up a simple, focused framework
* Best practice for Semantic HTML5, JS, CSS

## Features

* Stylus files are all imported from styles/main.scss
* `node_modules` are not included in source control
* Let editors handle lint watching (still provide build step).
  npm handles watching CSS and JS compression
* Watching contains debug info and source-maps
* Builds are production-ready

## Problems

The tasks in `package.json` are not designed to run in Windows. Since that's not
a platform I use for development. However a simple solution is to install GitBash
from Git for Windows. Having the bash commandline available in Windows is very
useful.

## Summary of libraries used

* [Browserify](http://browserify.org/) for getting NodeJS/require in the browser
* [Material Design Lite](http://www.getmdl.io/) for sane design principles
* [Material Design Icons](http://google.github.io/material-design-icons/) MDL icons
* [i18n-js](https://github.com/fnando/i18n-js) i18n translations in JS
* [tape](https://github.com/substack/tape) for testing
* [ESLint](http://www.eslint.org/) for sanity
* [Nock](https://github.com/pgte/nock) HTTP mocking library
* [Nodemon](http://nodemon.io/) for watching stuff
* [Stylus](https://github.com/stylus/stylus) for stylesheets
* [Slm](https://github.com/slm-lang/slm) Nobody should write HTML
* [PostgreSQL](http://www.postgresql.org/) for database
* [request](https://github.com/mikeal/request) for simple HTTP
* [Polyfills](https://github.com/zloirock/core-js) ES6 goodness without the hastle
* [es6-templates](https://github.com/esnext/es6-templates) string interpolation kinda
* UglifyJS and Clean CSS used for minifying (to be tested)

## Summary of libraries NOT used

* Bootstrap, Element UI, etc - Material Design is where it's at
* CoffeeScript - I believe JS can be beautiful enough
* Grunt, gulp, etc - for simple tasks npm does a fine job
* JQuery - It's less important these days, speed gains using native,
  build my own, specific library
* Express - may use this depending on requirements
* Component, Duo, etc - Browserify is enough for now

## Usage

### Create or update a project

    jlue <folder>
    cd <folder>
    npm install

### Update an existing project

    cd <folder>
    npm run update-all # this could star all the libs in package.json to allow
                  # them to be updated to the latest versions.

### Once in your created project

You'll want to choose and download your
[Material Design theme](http://www.getmdl.io/customize/index.html).

There's a default theme in `lib/material.min.css`. Replace it with
your downloaded theme.

Watches in debug mode (folder, source-maps, debugging, etc)

    npm run watch

Builds in production mode (compresses, no source-maps, no debugging)

    npm install

Start a server on port 8080

    npm start

## Rationale for some of the library choices

### Stylus - Stylesheets

Sass requires Ruby and Node-sass requires Visual Studio.
So I looked elsewhere and found Stylus. Clean syntax,
feature-rich, decent support.

### JS - Wut?!

Unlike HTML and CSS I don't believe a sensible intermediate language
exists yet for JavaScript. It's a programming language not a scripting
language (anymore).

Likewise, JQuery got us through the dark ages of front-end development
but legacy support requirements have all but gone (unless you're in one
of *those* companies). Frameworks come and go (and boy they sure do)
but JavaScript and the DOM remains.

### Nodemon

Why does every library need to implement a watcher? Keep it
light and consistent and use nodemon.

### Material Design Lite

A lot of thought has gone into the Material Design spec and I like the common sense
rules. On top of that MDL uses standard HTML, CSS and JS without requiring heavy
frameworks.

## Inspired by

* [Tools for Unit Testing](http://clock.co.uk/blog/tools-for-unit-testing-and-quality-assurance-in-node-js)
* [Task Automation with NPM](http://substack.net/task_automation_with_npm_run)
* [Asset Pipeline with NPM](http://blog.modulus.io/using-npm-scripts-to-build-asset-pipeline)
* [Create a Sass grid system](http://www.lukeharrison.net/blog/create-a-sass-grid-system/)
* [HTML5 layout from scratch](http://www.smashingmagazine.com/2009/08/04/designing-a-html-5-layout-from-scratch/)
* [Responsive Grid System](http://www.responsivegridsystem.com/)
* [ES6 Equivilents in ES5](https://github.com/addyosmani/es6-equivalents-in-es5)
* [Weaning yourself off jquery](http://substack.net/weaning_yourself_off_jquery)

## TODO

* Prod test with no dev modules installed
