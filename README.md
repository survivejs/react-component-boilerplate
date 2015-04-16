[![build status](https://secure.travis-ci.org/bebraw/react-component-boilerplate.png)](http://travis-ci.org/bebraw/react-component-boilerplate)
# react-component-boilerplate - Boilerplate for React.js components

This is a simple boilerplate that has been developed to make it easier to develop React components.

> IMPORTANT! If you use Jest for testing and rely on **react/addons**, you should depend on that at */lib*. Otherwise you might end up getting mysterious failures when running tests at Travis. If this isn't done, test and library code end up using different instances of React and you will get failures!

## Basic Usage

* Linting - **npm run lint**
* Testing - **npm test** - This will lint too.
* Developing - **npm start** - This will run a server at *localhost:3000* and use Hot Module Reloading.
* Demo deployment - **npm run gh-pages** and **npm run deploy-gh-pages** - Demo will contain *README.md* by default and comes with simple styling based on Pure.

```js
var a = 5;
var b = 10;

// just trying out code highlighting feature here
console.log(a + b);
```

## License

react-component-boilerplate is available under MIT. See LICENSE for more details.

