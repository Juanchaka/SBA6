const express = require('express')
const {
    getPosts,
    getPost,
    createPost,
    deletePost,
    updatePostt,
  } = require("../controllers/postsController");
  
  const router = express.Router();
  
  router.get("/", getPosts);
  
  router.get("/:id", getPost);
  
  router.post("/", createPost);
  
  router.delete("/:id", deletePost);
  
  router.patch("/:id", updatePostt);

module.exports = router