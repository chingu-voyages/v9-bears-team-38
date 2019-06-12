module.exports = {
  displayName: 'dom',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    //Allows load and test of CSS files in Node with Jest
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  //after Jest is loaded
  setupFilesAfterEnv: [require.resolve('./test/setup-tests.js')],
  collectCoverageFrom: ['**/src/**/*.js'],
  /* TURN ON AND SET FOR COVERAGE CONTROL !! */
  // coverageThreshold: {
  //   global: {
  //     statements: 100,
  //     branches: 100,
  //     lines: 100,
  //     functions: 100,
  //   },
  // },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
