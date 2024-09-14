const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "GET all users"})
})

router.get('/:id', (req, res) => {
    res.json({message: "GET one user"})
})

router.post('/', (req, res) => {
    res.json({message: "POST one user"})
})

router.delete('/:id', (req, res) => {
    res.json({message: "DELETE one user"})
})

router.patch('/:id', (req, res) => {
    res.json({message: "UPDATE one user"})
})

module.exports = router