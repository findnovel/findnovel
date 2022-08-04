import type { Ref } from 'vue'
import type { Novel } from '~~/types/novel'

export const useNovel = () => {
    const currentNovel: Ref<Novel> = useState('novel:current', () => null)

    async function getRandomNovel(): Promise<Novel> {
        const res = await fetch('/api/novels/random')
        const data = await res.json()
        return data
    }

    async function getNovelBySlug(slug: string): Promise<Novel> {
        const res = await fetch(`/api/novels/by-slug/${slug}`)
        const data = await res.json()
        return data
    }

    return {
        currentNovel,
        getRandomNovel,
        getNovelBySlug,
    }
}
