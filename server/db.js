import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    port: process.env.PORT || '3306',
    database: process.env.DATABASE || 'chekea'
})