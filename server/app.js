const express = require('express')
require('dotenv').config()
PORT = process.env.PORT
const comments = require('./routes/comments')
const posts = require('./routes/posts')
const users = require('./routes/users')

const app = express()
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.get('/', (req, res) => {
    res.status(200).json({message: `You've successfully connected!`})
})

app.use('/comments', comments)
app.use('/posts', posts)
app.use('/users', users)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})