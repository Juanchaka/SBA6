const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    validate: {
      validator: function(value) {
        return value <= Date.now();
      },
      message: 'Creation date cannot be in the future'
    }

  }
}, {timestamps: true});

// Create an index on 'author' for faster queries by user
commentSchema.index({ author: 1 });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
