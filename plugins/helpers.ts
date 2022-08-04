export default defineNuxtPlugin(() => ({
    provide: {
        scrollToTop: () =>
            document.documentElement.scrollIntoView({ behavior: 'smooth' }),
    },
}))
