export interface Novel {
    slug: string
    title: string
    author: string
    coverImage?: {
        majorColor?: string
        path: string
    }
    firstChapter: {
        title?: string
        content: string
    }
    buyLink?: string
}
