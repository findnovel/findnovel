import mysql from 'mysql2/promise'
import { Novel } from '~~/types/novel'

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
    const connection = await mysql.createConnection({
        host: config.apiPsHost,
        user: config.apiPsUsername,
        password: config.apiPsPassword,
        database: config.apiPsDatabase,
        ssl: {
            rejectUnauthorized: true,
        },
    })

    const slug = event.context.params.slug

    const [rows] = await connection.execute(
        `
    SELECT * FROM novels
        HAVING slug=?
    `,
        [slug]
    )

    const data = rows[0]
    const novel: Novel = {
        slug: data.slug,
        title: data.title,
        author: data.author,
        coverImage: {
            path: data.cover_path,
        },
        firstChapter: {
            content: data.excerpt,
        },
        buyLink: data.buy_link,
    }

    return novel
})
