[![build status](https://secure.travis-ci.org/survivejs/react-component-boilerplate.png)](http://travis-ci.org/survivejs/react-component-boilerplate) [![bitHound Score](https://www.bithound.io/github/survivejs/react-component-boilerplate/badges/score.svg)](https://www.bithound.io/github/survivejs/react-component-boilerplate) [![Dependency Status](https://david-dm.org/survivejs/react-component-boilerplate.svg)](https://david-dm.org/survivejs/react-component-boilerplate)
# react-component-boilerplate - Boilerplate for React.js components

This is a simple boilerplate that has been developed to make it easier to develop React components. Check out [SurviveJS - Webpack and React](http://survivejs.com/) to dig deeper into the topic.

## Basic Usage

If you want to replace project meta information (author etc.), consider using a tool like [replace-project-meta](https://www.npmjs.com/package/replace-project-meta).

* Linting - **npm run lint** - ESLint.
* Testing - **npm test** and **npm run tdd** - Karma/Mocha/Chai/Phantom.
* Developing - **npm start** - This will run a server at *localhost:8080* and use Hot Module Reloading.
* Creating a version - **npm version <x.y.<>** - This will */dist* and *package.json* with the new version and create a version tag at Git.
* Publishing a version - **npm publish** - This will push a new version to npm and update the project site.

## Highlighting Demo

```js
var a = 5;
var b = 10;

// just trying out code highlighting feature here
console.log(a + b);
```

## License

react-component-boilerplate is available under MIT. See LICENSE for more details.

