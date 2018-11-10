import express from 'express'

// Declare an app from express
const app = express()

// GET method route
app.get('/', (req, res) => res.send('GET request to the homepage'))
// POST method route
app.post('/', (req, res) => res.send('POST request to the homepage'))
// This route path will match requests to /about.
app.get('/about', (req, res) => res.send('about'))

app.all('/secret', (req, res, next) => {
    res.send('Accessing the secret section ...')
    next() // pass control to the next handler
})
// Patterns
app.get('/ab?cd', (req, res) => res.send('ab?cd') /** acd and abcd */)
app.get(
    '/ab+cd',
    (req, res) => res.send('ab+cd') /** abcd, abbcd, abbbcd and so on */
)
app.get('/ab(cd)?e', (req, res) => res.send('ab(cd)?e') /** /abe and /abcde. */)

//  regular expressions:
app.get(/a/, (req, res) => res.send('/a/') /**   anything with an “a” in it. */)
app.get(
    /.*fly$/,
    (req, res) =>
        res.send(
            '/.*fly$/'
        ) /**  butterfly and dragonfly, but not butterflyman, dragonflyman, and so on. */
)

// Route parameters
//   - named URL segments that are used to capture the values specified at their position in the URL.
//   - The captured values are populated in the req.params object
//   - The name of route parameters must be made up of “word characters” ([A-Za-z0-9_]).
//   - Since the hyphen (-) and the dot (.) are interpreted literally,
//     they can be used along with route parameters for useful purposes.

// Request URL : http://localhost:3000/users/34/books/8989
app.get(
    '/users/:userId/books/:bookId',
    (req, res) =>
        res.send(req.params) /**{ "userId": "34", "bookId": "8989" } */
)
// Request URL: http://localhost:3000/flights/LAX-SFO
app.get(
    '/flights/:from-:to',
    (req, res) => res.send(req.params) /**  "from": "LAX", "to": "SFO" } */
)
// http://localhost:3000/plantae/Prunus.persica
app.get(
    '/flights/:genus.:species',
    (req, res) =>
        res.send(
            req.params
        ) /**  { "genus": "Prunus", "species": "persica" } } */
)
// Request URL: http://localhost:3000/user/42
app.get(
    '/users/:userId(\\d+)',
    (req, res) => res.send(req.params) /** {"userId": "42"} */
)
export default app
