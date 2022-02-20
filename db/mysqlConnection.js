const mysql = require("mysql2");

require("dotenv").config();

const { DB_PASSWORD } = process.env;

const connection = mysql.createPool({
  connectionLimit: 2,
  host: "eu-cdbr-west-02.cleardb.net",
  user: "bbd07efabe3437",
  database: "heroku_265617700358fc9",
  password: DB_PASSWORD,
});
const disconnectSQL = () => {
  connection.end();
};
module.exports = { connection, disconnectSQL };
