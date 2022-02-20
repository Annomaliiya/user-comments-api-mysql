const mysql = require("../db");

const getComments = async () => {
  const sql = `SELECT * FROM heroku_265617700358fc9.comments;`;
  const [result] = await mysql.connection.promise().query(sql);
  return result;
};

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
  getComments,
  addComment,
};

module.exports = comments;
