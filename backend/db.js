// Import sql
const mysql = require('mysql');
const config = require('./config.js');

var connection = mysql.createConnection(config.database);

connection.connect(function(err) {
    if (err) {
      console.error('Failed to connect to the database: ' + err.stack);
      return;
    }
});

module.exports = connection;