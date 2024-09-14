const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "GET all posts"})
})

router.get('/:id', (req, res) => {
    res.json({message: "GET one post"})
})

router.post('/', (req, res) => {
    res.json({message: "POST one post"})
})

router.delete('/:id', (req, res) => {
    res.json({message: "DELETE one post"})
})

router.patch('/:id', (req, res) => {
    res.json({message: "UPDATE one post"})
})

module.exports = router