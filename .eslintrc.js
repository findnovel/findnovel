module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:vue/vue3-essential', 'plugin:prettier-vue/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    overrides: [
        {
            files: ['./pages/**/*.vue', './layouts/**/*.vue'],
            rules: {
                'vue/multi-word-component-names': 0,
            },
        },
    ],
}
