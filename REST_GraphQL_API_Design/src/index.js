import app from './server'

const hostname = '127.0.0.1'
const port = 3000

app.listen(port, hostname, () => {
    console.log(`now your server run @ port ${port}`)
})
