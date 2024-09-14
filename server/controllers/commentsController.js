const Comment = require("../models/commentsModel");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getComment = async (req, res) => {
    const { id } = req.params
    try {
      const comment = await Comment.findById(id)
      if(!comment) {
        return res.status(404).json({error: "Comment not found."})
      }
      res.status(200).json(comment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

const createComment = async (req, res) => {
  const { author, content, createdAt } = req.body;

  try {
    const comment = await Comment.create({ author, content, createdAt });
    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createComment,
  getComments,
  getComment
};
