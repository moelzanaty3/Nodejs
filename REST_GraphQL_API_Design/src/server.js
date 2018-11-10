import express from 'express'

// Declare an app from express
const app = express()

/**
 *          GET         : HTTP method for which the middleware function applies.
 *          '/'         : Path (route) for which the middleware function applies.
 *          function    : The middleware function.
 *          req         : HTTP request argument to the middleware function, called "req" by convention.
 *          res         : HTTP response argument to the middleware function, called "res" by convention
 *          next        : Callback argument to the middleware function, called "next" by convention.
 */
app.get('/user', (res, req) => {
    req.json({ user: 200 })
})

app.get('/', (res, req) => {
    req.json({ ok: 200 })
})
export default app
