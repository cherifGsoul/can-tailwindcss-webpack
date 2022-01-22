/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    rootDir: "src",
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: [
        "/node_modules/(?!can)"
    ],
    moduleFileExtensions: ["js", "stache"],
    moduleNameMapper: {
        '\\.(css)$': '<rootDir>/style-mock.js'
    },
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.mjs$": "babel-jest",
        "^.+\\.stache$": 'can-stache-transform',
    },
}
