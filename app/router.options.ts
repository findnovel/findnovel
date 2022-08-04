import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
    scrollBehavior(to, _, savedPosition) {
        if (to.name === 'index') {
            return savedPosition
        }
        return { top: 0 }
    },
}
