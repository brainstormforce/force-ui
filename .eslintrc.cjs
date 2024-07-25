/* eslint-env node */
module.exports = {
    // extends: ['eslint:recommended'],
    // parser: '@typescript-eslint/parser',
    // plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        // '@typescript-eslint/no-explicit-any': 'off',
        indent: 'off',
        'no-console': 'error',
    },
    globals: {
        setTimeout: true
    },
};