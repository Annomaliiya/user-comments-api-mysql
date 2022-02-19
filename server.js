const app = require("./app");
const mysql = require("./db");
const connection = mysql.connection;
console.log(connection);
const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log("Server running. Use our API on port: 3001");
});
