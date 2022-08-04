import type { Ref, VueElement, ShallowRef } from 'vue'

export const useSnackbar = () => {
    const icon: Ref<ShallowRef<VueElement> | null> = useState(
        'snackbar:icon',
        () => null
    )
    const title: Ref<string> = useState('snackbar:title', () => '')
    const action: Ref<Function | null> = useState('snackbar:action', () => null)
    const message: Ref<string> = useState('snackbar:message', () => '')
    const isActive: Ref<boolean> = useState('snackbar:is-active', () => false)

    let snackbarTimeout = null

    async function create(
        newTitle: string,
        newMessage: string,
        newIcon?: VueElement,
        newAction?: Function
    ) {
        if (isActive.value) {
            clear()
            await nextTick()
        }

        icon.value = shallowRef(newIcon)
        title.value = newTitle
        action.value = newAction
        message.value = newMessage

        isActive.value = true
        snackbarTimeout = setTimeout(clear, 4000)
    }

    function clear() {
        isActive.value = false
        clearTimeout(snackbarTimeout)

        icon.value = null
        action.value = null
    }

    return {
        icon,
        title,
        action,
        message,
        isActive,

        clear,
        create,
    }
}
