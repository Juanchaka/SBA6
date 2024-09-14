const express = require("express");
const {
  createComment,
  getComments,
  getComment,
  deleteComment,
  updateComment,
} = require("../controllers/commentsController");

const router = express.Router();

router.get("/", getComments);

router.get("/:id", getComment);

router.post("/", createComment);

router.delete("/:id", deleteComment);

router.patch("/:id", updateComment);

module.exports = router;