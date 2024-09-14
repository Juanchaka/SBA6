const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "GET all comments"})
})

router.get('/:id', (req, res) => {
    res.json({message: "GET one comment"})
})

router.post('/', (req, res) => {
    res.json({message: "POST one comment"})
})

router.delete('/:id', (req, res) => {
    res.json({message: "DELETE one comment"})
})

router.patch('/:id', (req, res) => {
    res.json({message: "UPDATE one comment"})
})

module.exports = router