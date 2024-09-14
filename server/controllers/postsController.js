const Post = require("../models/postsModel");
const User = require("../models/usersModel");

const mongoose = require("mongoose");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: `No post with id: '${id}' exists` });
  }
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ error: "post not found." });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createPost = async (req, res) => {
  const { title, username, content, createdAt } = req.body;

  if (!title || !username || !content) {
    return res.status(400).json({ message: 'Missing required fields: title, username, and content' });
  }
  
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const post = await Post.create({ title, author: user._id, content, createdAt });

    const populatedPost = await Post.findById(post._id).populate('author', 'username');

    res.status(201).json(populatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// const createPost = async (req, res) => {
//   const { title, author, content, createdAt } = req.body;

//   try {
//     const post = await Post.create({ title, author, content, createdAt });
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: `No post with id: '${id}' exists` });
  }
  try {
    const post = await Post.findOneAndDelete({ _id: id });
    if (!post) {
      return res
        .status(404)
        .json({ error: `No post with id: '${id}' exists` });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: `No post with id: '${id}' exists` });
  }
  try {
    const post = await Post.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!post) {
      return res
        .status(404)
        .json({ error: `No post with id: '${id}' exists` });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost
};