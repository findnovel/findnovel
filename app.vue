<script setup lang="ts">
useHead({
    title: 'FindNovel',
    link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
})
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtLoadingIndicator color="#ffffff" />
            <NuxtPage />
        </NuxtLayout>

        <Teleport to="body">
            <FloatingSnackbar />
        </Teleport>
    </div>
</template>
