var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'hackathon1',
  port: 3307
});

connection.connect();

module.exports = connection;