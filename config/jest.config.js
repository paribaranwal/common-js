module.exports = {
    rootDir: '../',
    moduleDirectories: ['node_modules'],
    testResultsProcessor: 'jest-sonar-reporter',
    collectCoverage: true,
    coverageDirectory: '<rootDir>/reports/coverage',
    collectCoverageFrom: [
      '**utilities/**/*.js',
      '!**utilities/**/*.mock.js',
      '!**/node_modules/**',
    ],
    coverageReporters: ['lcov', 'json'],
    verbose: true,
  };
  