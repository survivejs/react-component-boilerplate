[![build status](https://secure.travis-ci.org/survivejs/react-component-boilerplate.png)](http://travis-ci.org/survivejs/react-component-boilerplate) [![bitHound Score](https://www.bithound.io/github/survivejs/react-component-boilerplate/badges/score.svg)](https://www.bithound.io/github/survivejs/react-component-boilerplate) [![Dependency Status](https://david-dm.org/survivejs/react-component-boilerplate.svg)](https://david-dm.org/survivejs/react-component-boilerplate)
# react-component-boilerplate - Boilerplate for React.js components

This is a simple boilerplate that has been developed to make it easier to develop React components and small projects.

> Check out [SurviveJS - Webpack and React](http://survivejs.com/) to dig deeper into the topic.

## Basic Usage

If you want to replace project meta information (author etc.), consider using a tool like [replace-project-meta](https://www.npmjs.com/package/replace-project-meta).

### Common Tasks

* Developing - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).
* Creating a version - **npm version <x.y.z>** - Updates */dist* and *package.json* with the new version and create a version tag to Git.
* Publishing a version - **npm publish** - Pushes a new version to npm and updates the project site.

If you don't want to use universal rendering for the React portion, set `RENDER_UNIVERSAL` to `false` at *webpack.config.babel.js*.

### Testing

The test setup is based on Karma/Mocha/Chai/Phantom. Code coverage report is generated through istanbul/isparta to `build/`.

* Running tests once - **npm test**
* Running tests continuously **npm run test:tdd**
* Linting - **npm run test:lint** - Runs ESLint.

### Demo Site

The boilerplate includes a [GitHub Pages](https://pages.github.com/) specific portion for setting up a demo site for the component. The main commands handle with the details for you. Sometimes you might want to generate and deploy it by hand, or just investigate the generated bundle.

* Building - **npm run gh-pages** - Builds the demo into `./gh-pages` directory.
* Deploying - **npm run deploy-gh-pages** - Deploys the contents of `./gh-pages` to the `gh-pages` branch. GitHub will pick this up automatically. Your site will be available through *<user name>.github.io/<project name>`.
* Generating stats - **npm run stats** - Generates stats that can be passed to [webpack analyse tool](https://webpack.github.io/analyse/). This is useful for investigating what the build consists of.

## Highlighting Demo for the Site

```js
var a = 5;
var b = 10;

// just trying out code highlighting feature here
console.log(a + b);
```

## License

*react-component-boilerplate* is available under MIT. See LICENSE for more details.

