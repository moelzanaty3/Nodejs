import express from 'express'

// Declare an app from express
const app = express()

const apiRouter = express.Router()
apiRouter.get('/', (req, res) => res.json({ api: true }))
apiRouter.get('*', (req, res) => res.json({ apiAll: true }))

app.use('/api', apiRouter)

app.get('/', (req, res) => res.json({ backslash: true }))
app.all('*', (req, res) => res.json({ all: 'hello *' }))

export default app
