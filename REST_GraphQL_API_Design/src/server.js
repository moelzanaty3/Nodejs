import express from 'express'

// Declare an app from express
const app = express()

// Respond with Hello World! on the homepage:
app.get('/', (req, res) => res.send('Hello World!'))

// Respond to POST request on the root route(/), the application’s home page:
app.post('/', (req, res) => res.send('Got a POST request'))

// Respond to a PUT request to the /user route:
app.put('/user', (req, res) => res.send('Got a PUT request at /user'))

// Respond to a DELETE request to the /user route:
app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'))

export default app
