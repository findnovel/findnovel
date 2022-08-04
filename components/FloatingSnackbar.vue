<script setup lang="ts">
const { isActive, title, action, message, icon, clear } = useSnackbar()
</script>

<template>
    <Transition name="slide">
        <dialog
            v-if="isActive"
            @click="action ? action() && clear() : null"
            open
            :class="`group fixed inset-x-2 bottom-20 isolate z-10 flex w-auto items-center justify-between rounded bg-primary-50/10 py-1 backdrop-blur-lg ${
                action ? 'btn' : ''
            }`"
        >
            <div class="flex items-center gap-4">
                <component
                    v-if="icon"
                    :is="icon"
                    class="h-4 w-4 text-primary-50"
                />
                <div class="-space-y-1 py-2 text-primary-50">
                    <h2 class="mb-2 font-bold leading-4">{{ title }}</h2>
                    <p class="text-sm">{{ message }}</p>
                </div>
            </div>

            <IconsArrowRightIcon
                v-if="action"
                class="h-6 w-6 transform text-primary-50 transition-transform group-active:translate-x-1"
            />
        </dialog>
    </Transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    @apply transform transition-[transform,opacity];
}

.slide-enter-from,
.slide-leave-to {
    @apply translate-y-full opacity-0;
}
</style>
