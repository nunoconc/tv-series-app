/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFiles: ['<rootDir>/test/setup-tests.ts'],
};
