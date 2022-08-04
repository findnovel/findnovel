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
    // Not the most efficient solution, but the `novels` database is quite small (100 rows) anyways.
    // TODO: use a more efficient solution: https://stackoverflow.com/a/4329447
    const [rows] = await connection.execute(`
            SELECT * FROM novels
                ORDER BY RAND()
                LIMIT 1`)

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
