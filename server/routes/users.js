const express = require('express')
const {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUsert,
  } = require("../controllers/usersController");
  
  const router = express.Router();
  
  router.get("/", getUsers);
  
  router.get("/:id", getUser);
  
  router.post("/", createUser);
  
  router.delete("/:id", deleteUser);
  
  router.patch("/:id", updateUsert);

module.exports = router