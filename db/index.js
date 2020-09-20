// build your database
const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ebayDB'
});

db.connect();

module.exports = db;