const comments = require("../models/comments");

const getComments = async (req, res) => {
  const result = await comments.getComments();
  res.status(200).json(result);
};

module.exports = getComments;
