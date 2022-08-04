import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
        },
    },

    css: ['~~/assets/css/main.css'],

    runtimeConfig: {
        // PlanetScale environment variables
        apiPsHost: '',
        apiPsUsername: '',
        apiPsPassword: '',
        apiPsDatabase: '',
    },
})
