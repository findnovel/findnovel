<script setup lang="ts">
import type { Ref } from 'vue'
import CloseIconVue from '~~/components/icons/CloseIcon.vue'
import HeartIconVue from '~~/components/icons/HeartIconFilled.vue'

const { currentNovel: novel } = useNovel()
const { addFavoriteNovel } = useUser()
const { create: newSnackbar } = useSnackbar()

const router = useRouter()

async function loveNovel() {
    addFavoriteNovel(novel.value)
    newSnackbar(novel.value.title, 'Added to favorites', HeartIconVue, () =>
        router.push(`/novel/${novel.value.slug}`)
    )
    await nextNovel()
}
async function skipNovel() {
    newSnackbar(novel.value.title, 'Skipped', CloseIconVue)
    await nextNovel()
}

const { $scrollToTop } = useNuxtApp()
const { getRandomNovel } = useNovel()

const isLoading: Ref<boolean> = ref(true)
const firstChapterElement: Ref<HTMLElement | null> = ref(null)
async function nextNovel() {
    $scrollToTop()

    firstChapterElement.value.classList.toggle('animate-pulse')
    firstChapterElement.value.setAttribute('inert', 'inert')
    isLoading.value = true

    const data = await getRandomNovel()
    novel.value = data

    isLoading.value = false
    if (firstChapterElement.value) {
        firstChapterElement.value.classList.toggle('animate-pulse')
        firstChapterElement.value.removeAttribute('inert')
    }
}

onMounted(() => {
    // First time loading
    if (!novel.value) nextNovel()
})
</script>

<template>
    <div class="pb-32">
        <div
            class="mx-4 origin-top overflow-hidden bg-primary-800 px-4 py-12"
            ref="firstChapterElement"
        >
            <section v-if="novel">
                <h2 class="mb-3 text-center font-serif font-bold">
                    {{ novel.firstChapter.title }}
                </h2>
                <p class="whitespace-pre-line font-serif leading-6">
                    {{
                        novel.firstChapter.content
                            .replace(/([^\.])\n/g, '$1')
                            .split('.\n')
                            .slice(0, 10)
                            .join('.\n')
                            .replaceAll('\n', '\n\n') + '[...]'
                    }}
                </p>
            </section>
        </div>
        <section class="fixed bottom-24 right-0 mx-8 flex w-fit flex-col gap-4">
            <button
                title="Skip It"
                @click="skipNovel"
                class="btn grid h-12 w-12 place-items-center rounded-full border-[1px] border-primary-50 bg-primary-50/10 p-4 backdrop-blur-md"
            >
                <IconsCloseIcon class="h-full w-full text-primary-50" />
            </button>
            <button
                title="I Love It!"
                @click="loveNovel"
                class="btn grid h-12 w-12 place-items-center rounded-full border-[1px] border-primary-50 bg-primary-50/10 p-4 backdrop-blur-md"
            >
                <IconsHeartIconFilled class="h-full w-full text-primary-50" />
            </button>
        </section>
    </div>
</template>
