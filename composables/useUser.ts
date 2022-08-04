import { Novel } from '~~/types/novel'
import { useStorage } from '@vueuse/core'
import type { Ref } from 'vue'
import { User } from '~~/types/user'

export const useUser = () => {
    const favoriteNovels: Ref<Novel[]> = useStorage('user:favorite-novels', [])

    function addFavoriteNovel(novel: Novel) {
        favoriteNovels.value.push(novel)
    }

    return {
        favoriteNovels,
        addFavoriteNovel,
    }
}
