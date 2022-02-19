const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "server",
  database: "comments_project",
  password: "server",
  port: 3306,
});
const disconnectSQL = () => {
  connection.end();
};
module.exports = { connection, disconnectSQL };
