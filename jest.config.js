const config = {
    collectCoverage: true,
    collectCoverageFrom: [
        './src/**/*.js'
    ],
    coverageReporters: ['json', 'lcov', 'text', 'text-summary', 'clover'],
    coverageThreshold: {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0
        }
    },
    setupFilesAfterEnv: [
        `${__dirname}/scripts/jest/test-framework-setup.js`
    ],
    moduleNameMapper: {
        '\\.(styl)$': `${__dirname}/scripts/jest/dumb-mock.js`
    },
    transform: {
        '^.+\\.js': `${__dirname}/node_modules/babel-jest`,
        '^.+\\.svg$': `${__dirname}/scripts/jest/jest-svg-transform.js`
    }
};

module.exports = config;
