// Setup mysql db connection
const mysql = require('mysql');

// create a new MySQL connection
const db = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "root123",
    database : "custom_incentive"
});
// connect to the MySQL database
db.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

module.exports= db;

// close the MySQL connection
// connection.end();






   