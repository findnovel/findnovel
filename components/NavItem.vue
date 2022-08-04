<script setup lang="ts">
defineProps<{
    isActive: boolean
}>()
</script>

<template>
    <div
        :class="`relative grid h-full place-items-center overflow-visible px-8 transition-opacity ${
            isActive
                ? 'before:radial-glow after:linear-glow before:pointer-events-none before:absolute  before:inset-0  after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-[1px]'
                : 'opacity-40'
        }`"
    >
        <slot />
    </div>
</template>
