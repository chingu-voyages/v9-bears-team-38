# ReactBoilerplate

Boiler for basic React Apps. Not strapped with CRA. <br> Built to better
incorporate testing from the start of a project.

#### Much of this project came from these two sources:

1. [Medium article on how to build a React App with Babel and Webpack 4 -- by Sukhjinder Arora](https://hackernoon.com/how-to-build-a-react-project-from-scratch-using-webpack-4-and-babel-56d4a26afd32)
2. [TestingJavaScript.com -- by Kent C. Dodds](https://testingjavascript.com/)

### Dev Dependencies

- [Husky](https://www.npmjs.com/package/husky)
- [Prettier](https://www.npmjs.com/package/prettier)
- [ESLint](https://www.npmjs.com/package/eslint)
- [Lint-Staged](https://www.npmjs.com/package/lint-staged)
- Babel
- Webpack
- React
- React-DOM

### Testing Related Dependencies

- Jest
- [Jest-DOM](https://www.npmjs.com/package/jest-dom)
- [Jest-Axe](https://www.npmjs.com/package/jest-axe)
- [Jest-Watch-Typeahead](https://www.npmjs.com/package/jest-watch-typeahead)
- [@Testing-Library/React](https://www.npmjs.com/package/@testing-library/react)
- [CSS-Loader](https://www.npmjs.com/package/css-loader)
- [Style-Loader](https://www.npmjs.com/package/style-loader)

### Tests

There are a few custom configured test scripts (with watch, coverage, etc).These
are ready to use or not use. <br> <br> The Husky pre-commit hook will run
lint-staged which looks to the _lintstagedrc_ file. This will happen on every
commit. <br> <br> Currently that runs ESLint, Prettier, and Jest tests on staged
files only and will abort the commit if any of them fail. <br> <br> ESLint and
Prettier look to _eslintrc_ and _prettierrc_ respectively for configuration.

### Coverage

The test script has the Jest coverage flag which can be removed if desired. <br>
_jest.config.js_ has a coverage threshold that only needs un-commented and then
you can set to your specs.

### Base-Tests

The _base_tests_ file has a few preset tests to help show some of the testing
features included and how they appear in the console. These can be
changed/removed as needed. <br> <br> The _debug()_ feature is very helpful to
throw into tests and see exactly how the test-DOM looks at that point of the
test, so you can better setup your assertions.
