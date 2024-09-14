const Comment = require("../models/commentsModel");
const Post = require("../models/postsModel");
const User = require("../models/usersModel");
const mongoose = require("mongoose");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getComment = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: `No comment with id: '${id}' exists` });
  }
  try {
    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found." });
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// const createComment = async (req, res) => {
//   const { author, content, post, createdAt } = req.body;

//   try {
//     const comment = await Comment.create({ author, content, post, createdAt });
//     res.status(200).json(comment);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const createComment = async (req, res) => {
  const { author, content, post, createdAt } = req.body;

  if (!author || !content || !post) {
    return res.status(400).json({ message: 'Missing required fields: author, content, and post are required' });
  }

  if (!mongoose.Types.ObjectId.isValid(post)) {
    return res.status(400).json({ message: 'Invalid post ID format' });
  }

  try {
    const existingPost = await Post.findById(post);
    if (!existingPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const existingUser = await User.findById(author);
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const comment = await Comment.create({ author, content, post, createdAt });

    await comment.validate(); // This line will trigger validation
    await comment.save();

    const populatedComment = await Comment.findById(comment._id)
      .populate('author', 'username')
      .populate('post', 'title');

    res.status(201).json(populatedComment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: `No comment with id: '${id}' exists` });
  }
  try {
    const comment = await Comment.findOneAndDelete({ _id: id });
    if (!comment) {
      return res
        .status(404)
        .json({ error: `No comment with id: '${id}' exists` });
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateComment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: `No comment with id: '${id}' exists` });
  }
  try {
    const comment = await Comment.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!comment) {
      return res
        .status(404)
        .json({ error: `No comment with id: '${id}' exists` });
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createComment,
  getComments,
  getComment,
  deleteComment,
  updateComment
};
