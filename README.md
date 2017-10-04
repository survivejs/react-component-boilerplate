[![build status](https://secure.travis-ci.org/survivejs/react-component-boilerplate.svg)](http://travis-ci.org/survivejs/react-component-boilerplate) [![bitHound Score](https://www.bithound.io/github/survivejs/react-component-boilerplate/badges/score.svg)](https://www.bithound.io/github/survivejs/react-component-boilerplate) [![Dependency Status](https://david-dm.org/survivejs/react-component-boilerplate.svg)](https://david-dm.org/survivejs/react-component-boilerplate)

# react-component-boilerplate - Boilerplate for React.js components

This is a simple boilerplate that has been developed to make it easier to develop React components and small projects.

> Check out [SurviveJS - Webpack and React](http://survivejs.com/) to dig deeper into the topic.

## Basic Usage

Clone the repo : `git clone https://github.com/survivejs/react-component-boilerplate my-component`.

To get started with fresh history, do this:

1. `cd my-component`
2. `rm -rf .git` (or in Windows `rmdir .git /S /Q`) - Remove Git database
3. `git init` - Initialize a new Git repository
4. `git add .` - Add all files to staging
5. `git commit -am "Initial commit"` - Commit the files

After this you should push the project to some remote.

If you want to replace project meta information (author etc.), consider using a tool like [replace-project-meta](https://www.npmjs.com/package/replace-project-meta).

### Common Tasks

* Developing - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).
* Creating a version - **npm version <x.y.z>**.
* Publishing a version - **npm publish** - Pushes a new version to npm and updates the project site.

### Testing

The test setup is based on Jest. Code coverage report is generated to `coverage/`. The coverage information is also uploaded to codecov.io after a successful Travis build.

* Running tests once - **npm test**
* Running tests continuously - **npm run test:watch**
* Running individual tests - **npm test -- <pattern>** - Works with `test:watch` too.
* Linting - **npm run test:lint** - Runs ESLint.

### Documentation Site

The boilerplate includes a [GitHub Pages](https://pages.github.com/) specific portion for setting up a documentation site for the component. The main commands handle with the details for you. Sometimes you might want to generate and deploy it by hand, or just investigate the generated bundle.

* Building - **npm run gh-pages** - Builds the documentation into `./gh-pages` directory.
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

