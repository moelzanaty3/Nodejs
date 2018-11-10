import http from 'http'
import app from './server'

const server = http.createServer(app)
const port = 3000
let currentApp = app

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
if (module.hot) {
    module.hot.accept(['./server'], () => {
        server.removeListener('request', currentApp)
        server.on('request', app)
        currentApp = app
    })
}
