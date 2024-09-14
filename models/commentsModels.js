const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model('Comment', commentsSchema)

module.exports = Comment