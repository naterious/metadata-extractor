var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT, 10),
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("DROP DATABASE IF EXISTS books", function (err, result) {
    if (err) throw err;
    console.log("Database dropped");
    return process.exit(0);
  });
});