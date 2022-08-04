<script setup lang="ts">
import type { Ref } from 'vue'
import type { Novel } from '~~/types/novel'

const { getNovelBySlug } = useNovel()
const novel: Ref<Novel> = ref(null)

const route = useRoute()
const novelDetails: Ref<HTMLElement | null> = ref(null)
onMounted(() => {
    watch(
        () => route.params.slug,
        async (slug) => {
            if (!slug) return
            novel.value = await getNovelBySlug(slug as string)

            if (!novelDetails.value) {
                await nextTick()
            }

            if (novelDetails.value) {
                novelDetails.value.style.setProperty(
                    '--bg-image-path',
                    `url(${novel.value.coverImage.path})`
                )
            }
        },
        { immediate: true }
    )
})

const router = useRouter()
function goBack() {
    router.go(-1)
}
</script>

<template>
    <div v-if="novel">
        <section
            id="NovelDetails"
            ref="novelDetails"
            class="relative mx-auto mt-20 flex flex-col items-center before:absolute before:inset-x-0 before:-top-24 before:-z-10 before:h-64 before:bg-cover after:absolute after:inset-x-0 after:-top-24 after:-z-10 after:h-64 after:bg-gradient-to-b after:from-primary-900/60 after:to-primary-900/5"
        >
            <button
                class="group absolute -top-16 left-4 p-3"
                title="Go back"
                @click="goBack"
            >
                <IconsArrowLeftIcon
                    class="h-6 w-6 transform text-primary-50 transition-transform group-hover:-translate-x-1"
                />
            </button>
            <div class="flex max-w-sm flex-col items-center">
                <img
                    class="w-64"
                    :alt="novel.title"
                    :src="novel.coverImage.path"
                />
                <h2 class="mt-4 self-start text-lg font-bold">
                    {{ novel.title }}
                </h2>
                <p class="self-start text-sm">By {{ novel.author }}</p>
                <a
                    v-if="novel.buyLink"
                    :href="novel.buyLink"
                    class="btn mt-2 block w-full rounded-md bg-primary-50/10 py-1 text-center font-bold uppercase"
                    >Buy</a
                >
            </div>
        </section>
        <p class="mx-6 mt-8 font-serif">
            The villagers of Little Hangleton still called it ‘the Riddle
            House’, even though it had been many years since the Riddle family
            had lived there. It stood on a hill overlooking the village, some of
            its windows boarded, tiles missing from its roof, and ivy spreading
            unchecked over its face. Once a fine-looking manor, and easily the
            largest and grandest building for miles around, the Riddle House was
            now damp, derelict and unoccupied.The Little Hangletons all agreed
            that the old house was ‘creepy’.
        </p>
    </div>
    <!-- Loading Skeleon -->
    <div v-else class="animate-pulse">
        <section
            class="relative mx-auto mt-20 flex flex-col items-center before:absolute before:inset-x-0 before:-top-24 before:-z-10 before:h-64 before:bg-primary-50 after:absolute after:inset-x-0 after:-top-24 after:-z-10 after:h-64 after:bg-gradient-to-b after:from-primary-900/60 after:to-primary-900/5"
        >
            <button
                class="group absolute -top-16 left-4 p-3"
                title="Go back"
                @click="goBack"
            >
                <IconsArrowLeftIcon
                    class="h-6 w-6 transform text-primary-50 transition-transform group-hover:-translate-x-1"
                />
            </button>
            <div class="space-y-2">
                <!-- Book Cover -->
                <div class="h-96 w-64 rounded-sm bg-primary-50"></div>

                <!-- Book Title -->
                <div class="h-8 w-full rounded-sm bg-primary-50"></div>

                <!-- Book Author -->
                <div class="h-4 w-2/3 rounded-sm bg-primary-50"></div>

                <!-- Buy Button -->
                <div class="h-6 w-full rounded-sm bg-primary-50"></div>
            </div>
        </section>
        <div class="mx-6 mt-8 space-y-1">
            <!-- Book Description -->
            <div class="h-4 w-full rounded-sm bg-primary-50"></div>
            <div class="h-4 w-full rounded-sm bg-primary-50"></div>
            <div class="h-4 w-2/3 rounded-sm bg-primary-50"></div>
        </div>
    </div>
</template>

<style scoped>
#NovelDetails:before {
    background-image: var(--bg-image-path);
}
</style>
