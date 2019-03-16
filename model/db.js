'user strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password1!',
    database : 'appdb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;