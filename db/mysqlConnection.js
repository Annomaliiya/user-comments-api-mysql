const mysql = require("mysql2");
const connection = mysql.createPool({
  connectionLimit: 2,
  host: "eu-cdbr-west-02.cleardb.net",
  user: "bbd07efabe3437",
  database: "heroku_265617700358fc9",
  password: process.env.DB_PASSWORD,
});
const disconnectSQL = () => {
  connection.end();
};
module.exports = { connection, disconnectSQL };
