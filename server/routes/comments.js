const express = require('express')
const Comment = require('../models/commentsModels')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "GET all comments"})
})

router.get('/:id', (req, res) => {
    res.json({message: "GET one comment"})
})

router.post('/', async (req, res) => {
    const { author, content, createdAt } = req.body

    try {
        const comment = await Comment.create({author, content, createdAt})
        res.status(200).json(comment)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.delete('/:id', (req, res) => {
    res.json({message: "DELETE one comment"})
})

router.patch('/:id', (req, res) => {
    res.json({message: "UPDATE one comment"})
})

module.exports = router