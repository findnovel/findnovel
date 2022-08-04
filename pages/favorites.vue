<script setup lang="ts">
const { favoriteNovels: favorites } = useUser()
</script>

<template>
    <div class="mx-4 flex flex-wrap gap-x-4 gap-y-7">
        <ClientOnly>
            <NuxtLink
                :to="`/novel/${slug}`"
                v-for="{
                    slug,
                    title,
                    coverImage: { majorColor, path },
                } in favorites"
                :key="title"
            >
                <article class="h-[24rem] w-44 sm:h-96 sm:w-72" :title="title">
                    <img
                        :alt="title"
                        class="h-full w-full transform cursor-pointer object-cover transition-transform hover:-translate-y-1 active:brightness-90"
                        :style="{ backgroundColor: majorColor }"
                        :src="path"
                    />
                </article>
            </NuxtLink>
        </ClientOnly>
    </div>
</template>
