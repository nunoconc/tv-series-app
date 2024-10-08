module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        node: true,
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        jsx: true, // Enable JSX support
    },
    plugins: ['@typescript-eslint'],
    rules: {
        semi: [2, 'always'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-unused-vars': 'warn',
    },
};
