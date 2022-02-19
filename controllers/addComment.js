const comments = require("../models/comments");

const addComment = async (req, res) => {
  const { name, email, comment } = req.body;
  console.log("test2");
  const result = await comments.addComment(name, email, comment);
  res.status(201).json(result);
};

module.exports = addComment;
