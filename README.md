[![Build Status](https://travis-ci.org/Stupidism/stupid-rc-starter.svg?branch=master)](https://travis-ci.org/Stupidism/stupid-rc-starter)
[![bitHound Score](https://www.bithound.io/github/Stupidism/stupid-rc-starter/badges/score.svg)](https://www.bithound.io/github/Stupidism/stupid-rc-starter)
[![Dependency Status](https://david-dm.org/Stupidism/stupid-rc-starter.svg)](https://david-dm.org/Stupidism/stupid-rc-starter)
[![devDependencies Status](https://david-dm.org/Stupidism/stupid-rc-starter/dev-status.svg)](https://david-dm.org/Stupidism/stupid-rc-starter?type=dev)

# stupid-rc-starter - Starter for React.js components

This is a simple boilerplate that has been developed to make it easier to develop React components and small projects.

> Check out [SurviveJS - Webpack and React](http://survivejs.com/) to dig deeper into the topic.

## Basic Usage

Clone the repo : `git clone https://github.com/Stupidism/stupid-rc-starter my-component`.

To get started with fresh history, do this:

1. `cd my-component`
2. `rm -rf .git` - Remove Git database
3. `git init` - Initialize a new Git repository
4. `git add .` - Add all files to staging
5. `git commit -am "Initial commit"` - Commit the files

After this you should push the project to some remote.

If you want to replace project meta information (author etc.), consider using a tool like [replace-project-meta](https://www.npmjs.com/package/replace-project-meta).

### Common Tasks

* Developing - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).
* Creating a version - **npm version <x.y.z>** - Updates */dist* and *package.json* with the new version and create a version tag to Git.
* Publishing a version - **npm publish** - Pushes a new version to npm and updates the project site.

### Testing

The test setup is based on Jest. Code coverage report is generated to `coverage/`. The coverage information is also uploaded to codecov.io after a successful Travis build.

* Running tests once - **npm test**
* Running tests continuously - **npm run test:watch**
* Running individual tests - **npm test -- <pattern>** - Works with `test:watch` too.
* Running automatically - pre-push hook of **git push**

### Linting
* Linting - **npm run lint** - Runs both **npm run lint:js** and **npm run lint:css**.
* Linting js only - **npm run lint:js** - Runs ESLint.
* Linting css only - **npm run lint:css** - Runs stylelint.
* Linting & fixing staged files only - **npm run lint:staged** - Runs lint-staged.
* Linting & fixing automatically - pre-commit hook of **git commit**

### Documentation Site

The starter includes a [GitHub Pages](https://pages.github.com/) specific portion for setting up a documentation site for the component. The main commands handle with the details for you. Sometimes you might want to generate and deploy it by hand, or just investigate the generated bundle.

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

*stupid-rc-starter* is available under MIT. See LICENSE for more details.

