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
var requestTime = function(req, res, next) {
    req.requestTime = Date.now()
    next()
}
app.use(requestTime)
app.get('/', function(req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
})
export default app
