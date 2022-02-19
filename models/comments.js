const mysql = require("../db");

const addComment = async (name, email, comment) => {
  const newComment = {
    // id: v4(),
    name,
    email,
    comment,
  };
  // await db call;
  const sql = `INSERT INTO comments(name, email, comment) VALUES('${name}', '${email}', '${comment}');`;
  console.log(mysql.connection);
  console.log(mysql);
  mysql.connection.query(sql, function (err, results) {
    if (err) console.log(err);
    console.log(results);
  });
  return newComment;
};

const comments = {
  addComment,
};

module.exports = comments;
