import express from 'express'

// Declare an app from express
const app = express()

app.get('/', (req, res) => {
    res.json({ ok: 'hello' })
})

export default app
