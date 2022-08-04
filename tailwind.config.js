const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app.vue',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './components/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', defaultTheme.fontFamily.sans],
                serif: ['Eczar', defaultTheme.fontFamily.serif],
            },
            colors: {
                primary: colors.neutral,
            },
        },
    },
    plugins: [],
}
