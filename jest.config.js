module.exports = {
    preset: 'ts-jest',
    testEnvironment: "jest-environment-jsdom",
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testMatch: ['**/tests/**/*.test.ts'],
};
