const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;
const comments = require("./routes/comments");
const posts = require("./routes/posts");
const users = require("./routes/users");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({ message: `You've successfully connected!` });
});

app.use("/comments", comments);
app.use("/posts", posts);
app.use("/users", users);

mongoose
  .connect(URI)
  .then(() => {
    console.log("successfully connected!");
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.use((req, res, next, err) => {
  console.json(err);
  next();
});
