const express = require('express')
const { createComment,
        getComments,
        getComment

 } = require('../controllers/commentsController')

const router = express.Router()


router.get('/', getComments)

router.get('/:id', getComment)

router.post('/', createComment)

router.delete('/:id', (req, res) => {
    res.json({message: "DELETE one comment"})
})

router.patch('/:id', (req, res) => {
    res.json({message: "UPDATE one comment"})
})



module.exports = router