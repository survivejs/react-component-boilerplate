[![build status](https://secure.travis-ci.org/survivejs/react-component-boilerplate.png)](http://travis-ci.org/survivejs/react-component-boilerplate) [![bitHound Score](https://www.bithound.io/github/survivejs/react-component-boilerplate/badges/score.svg)](https://www.bithound.io/github/survivejs/react-component-boilerplate) [![Dependency Status](https://david-dm.org/survivejs/react-component-boilerplate.svg)](https://david-dm.org/survivejs/react-component-boilerplate)
# react-component-boilerplate - Boilerplate for React.js components

This is a simple boilerplate that has been developed to make it easier to develop React components. Check out [SurviveJS - Webpack and React](http://survivejs.com/) to dig deeper into the topic.

> IMPORTANT! If you use Jest for testing and rely on **react/addons**, you should depend on that at */src*. Otherwise you might end up getting mysterious failures when running tests at Travis. If this isn't done, test and library code end up using different instances of React and you will get failures!

## Basic Usage

* Replacing meta information  - **npm run replace-meta** - This will allow you to update project metadata (GitHub user/project). Note that this can be potentially dangerous since it does just a naive search/replace over *README.md* and *package.json*!
* Linting - **npm run lint**
* Testing - **npm test** - This will lint too.
* Developing - **npm start** - This will run a server at *localhost:3000* and use Hot Module Reloading.
* Demo deployment - **npm run gh-pages** and **npm run deploy-gh-pages** - Demo will contain *README.md* by default and comes with simple styling based on Pure.
* Generating a distribution version - **npm run dist-all** - This will generate `/dist` (UMD bundle + minified UMD bundle) and `/dist-modules`. Latter contains a version of `/src` that has been run through babel. It is meant for NPM users.

Note that there are hooks for `npm version`. The system will run tests, generate a distribution bundle and include that into the version commit. This can fail in case dist doesn't contain any changes! After that has completed it will generate GitHub Pages and deploy a new version.

```js
var a = 5;
var b = 10;

// just trying out code highlighting feature here
console.log(a + b);
```

## License

react-component-boilerplate is available under MIT. See LICENSE for more details.

