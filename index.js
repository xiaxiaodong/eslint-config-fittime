module.exports = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/node',
        './rules/style',
        './rules/variables',
        './rules/es6',
        './rules/imports',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        strict: 'error',
    },
    globals: {
        // 微信小程序 全局函数
        wx: {},
        App() {
        },
        getApp() {
        },
        getCurrentPages() {
        },
        Page() {
        },
        Component() {
        },
    }
};
