const mysql = require("../db");

const addComment = async (name, email, comment) => {
  const newComment = {
    name,
    email,
    comment,
  };
  const sql = `INSERT INTO comments(name, email, comment) VALUES(?,?,?);`;

  mysql.connection.query(sql, [name, email, comment], function (err, results) {
    if (err) console.log(err);
    console.log(results);
  });
  return newComment;
};

const comments = {
  addComment,
};

module.exports = comments;
