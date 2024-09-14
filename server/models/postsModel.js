const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {timestamps: true});

// Create an index on 'author' for faster queries by user
postSchema.index({ author: 1 });

// Create an index on 'createdAt' for efficient sorting
postSchema.index({ createdAt: -1 });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;