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

app.use('/users', userRouter)
app.use('/posts', postRouter)

// middlewarefunc
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)