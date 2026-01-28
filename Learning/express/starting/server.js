const express = require('express')
const app = express()

app.get('/', logger, (req, res) => {
    console.log("here")
    // res.status(500).send("Hi")
})

app.get('/users', (req, res) => {
    res.send('User List')
})

app.get('/users/new', (req, res) => {
    res.send('User New Form')
})

const userRouter = require('./routes/users')
const postRouter = require('./routes/users')
const birds = require('./routes/birds')

app.use('/users', userRouter)
app.use('/posts', postRouter)

// middlewarefunc
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.get('/admin', (req, res, next) => {
    if (!req.user.isAdmin) {
      return next('route') // skip remaining callbacks for the current route, Jump to the next route that matches the path
    }
    next() // Continue to the next middleware/handler in the same route definition
  },
  (req, res) => {
    res.send("Welcome admin")
  }
)
app.get('/admin', (req, res) => {
  res.status(403).send("Access denied")
})

app.listen(3000)

app.use('/birds', birds)
